import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';
import { promisify } from 'util';
import { dirname, basename  } from "path";

const writeFile = promisify(fs.writeFile);

cloudinary.config({ 
  cloud_name: 'dzjr3skhe', 
  api_key: '786445459495775', 
  api_secret: 'HBnKV8tC88KtWEcZA95RrqNR9Es' 
});

async function pullJsonData() {
    try {
        let allImages = [];
        // set to null initially
        let nextCursor = null;

        do {
            // send a request to cloudinary to fetch images
            const result = await cloudinary.api.resources({
                type: 'upload',
                prefix: 'Movie_Stills_Index/stillsfrmfilms/',
                max_results: 500,
                //cloudinary will return a truthy value for next_cursor only if there are more images to fetch
                next_cursor: nextCursor,
            });

            // map and set to organize folders by movie
            const  movieFolders = [...new Set(result.resources.map((image => dirname(image.public_id))))];
            console.log('movieFolders', movieFolders);

            // Fetch all images in each movie folder
            for (const movieFolder of movieFolders) {
                const images = await fetchImagesFromDirectory(movieFolder);
                allImages = allImages.concat(images);
            }

            nextCursor = result.next_cursor;

            // Sleep for a second to avoid hitting API rate limit
            await new Promise(resolve => setTimeout(resolve, 1000));
        } while (nextCursor);

        // extract only the needed properties
        const imageInfo = allImages.map(img => {
            const title = basename(dirname(img.public_id)); // assuming movie name is the last part of the directory path
            return {
                title,
                url: img.secure_url, // the HTTPS link to the image
                
            };
        });

        // Write the image info to a JSON file
        await writeFile('master_movie_stills.json', JSON.stringify(imageInfo, null, 2));
        
        console.log('Images fetched and written to movie_stills.json');
    } catch (err) {
        console.error('Error fetching images or writing to file:', err);
    }
}

async function fetchImagesFromDirectory(directory) {
    let resources = [];
    let nextCursor = null;
  
    do {
        const result = await cloudinary.api.resources({
            type: 'upload',
            prefix: `${directory}/`,
            max_results: 500,
            next_cursor: nextCursor,
        });

        resources = resources.concat(result.resources);
        nextCursor = result.next_cursor;

        // wait for 1 second before the next request
        await new Promise(resolve => setTimeout(resolve, 1000)); 
    } while (nextCursor);

    return resources;
}

pullJsonData();


