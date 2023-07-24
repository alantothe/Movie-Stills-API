
//make sure filteredMovies.json and movie_stills folder are in the same directory as this file

import fs from 'fs';
import { promisify } from 'util';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

async function mergeMoviesAndStills() {
    try {
        const data = await readFile(path.join(__dirname, 'filteredMovies.json'), 'utf8');
        const filteredMovies = JSON.parse(data);

        for (let movie of filteredMovies) {
            const movieStillsPath = path.join(__dirname, 'movie_stills', `${movie.Title.replace(/\W+/g, '_')}.json`);

            if (fs.existsSync(movieStillsPath)) {
                const movieStillsData = await readFile(movieStillsPath, 'utf8');
                const movieStills = JSON.parse(movieStillsData);

                movie.Stills = movieStills.movieStills;
            } else {
                console.warn(`No stills found for movie: ${movie.Title}`);
            }
        }

        await writeFile(path.join(__dirname, 'mergedMovies.json'), JSON.stringify(filteredMovies, null, 2));
        console.log('Movies and stills have been merged into mergedMovies.json');
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

mergeMoviesAndStills();
