//filter the data from movide
// make sure moviesData.json is in the same directory as this file

import fs from 'fs';
import { promisify } from 'util';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

async function filterMovies() {
    try {
        const data = await readFile(path.join(__dirname, 'masterMoviesData.json'), 'utf8');
        const movies = JSON.parse(data);

        const filteredMovies = movies.map(movie => {
            return {
                'Title': movie.Title,
                'Year': movie.Year,
                'Rated': movie.Rated,
                'Released': movie.Released,
                'Runtime': movie.Runtime,
                'Genre': movie.Genre,
                'Director': movie.Director,
                'Writer': movie.Writer,
                'Actors': movie.Actors,
                'Plot': movie.Plot,
                'Language': movie.Language,
                'Country': movie.Country,
                'Awards': movie.Awards,
                'Poster': movie.Poster,
                'BoxOffice': movie.BoxOffice,
                'imdbID': movie.imdbID,
                'imdbRating': movie.imdbRating,
                'Stills': [] // Assuming this is where you want to put the stills
            };
        });

        await writeFile(path.join(__dirname, 'filteredMovies.json'), JSON.stringify(filteredMovies, null, 2));

        console.log('Movies filtered and written to filteredMovies.json');
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

filterMovies();
