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
                'Year': parseInt(movie.Year),
                'Rated': movie.Rated,
                'Released':new Date(movie.Released),
                'Runtime': parseInt(movie.Runtime.replace(' min', '')),
                'Genre': movie.Genre.split(', ').map(item => item.trim()),
                'Director': movie.Director.split(', ').map(item => item.trim()),
                'Writer': movie.Writer.split(', ').map(item => item.trim()),
                'Actors': movie.Actors.split(', ').map(item => item.trim()),
                'Plot': movie.Plot,
                'Language': movie.Language.split(', ').map(item => item.trim()),
                'Country': movie.Country.split(', ').map(item => item.trim()),
                'Awards': movie.Awards,
                'Poster': movie.Poster,
                'BoxOffice': parseFloat(movie.BoxOffice.replace(/[^0-9.]/g, "")),
                'imdbID': movie.imdbID,
                'imdbRating': movie.imdbRating,
                'imdbRating': parseFloat(movie.imdbRating), 
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
