
//this file sorts the master json file into separate json files for each movie.
//the master josn file must be in the directory with this file.


import fs from 'fs';
import { promisify } from 'util';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

async function sortImagesByMovies() {
    try {
        const data = await readFile(path.join(__dirname, 'master_movie_stills.json'), 'utf8');
        const images = JSON.parse(data);

        // Group images by movie
        const movies = images.reduce((accumulator, img) => {
            if (!accumulator[img.title]) {
              accumulator[img.title] = [];
            }
            accumulator[img.title].push(img.url);
            return accumulator;
        }, {});

        // Write the movie info to a JSON file
        const index = [];
        for (const [title, movieStills] of Object.entries(movies)) {
          const filename = `${title.replace(/\W+/g, '_')}.json`;
          await writeFile(path.join(__dirname, 'movie_stills', filename), JSON.stringify({ title, movieStills }, null, 2));
          index.push(filename);
        }

        // Write index to JSON file
        await writeFile(path.join(__dirname, 'movie_stills', 'index.json'), JSON.stringify(index, null, 2));
        console.log('Images sorted by movie and written to separate JSON files');
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

sortImagesByMovies();

