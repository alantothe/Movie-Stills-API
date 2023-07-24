import mongoose from "mongoose";

let movieDataSchema = new mongoose.Schema({

    Title: {
        type: String,
        trim: true,
    },
    Year: {
        type: String,
    },
    Rated: {
        type: String,
    },
    Released: {
        type: String,
    },
    Runtime: {
        type: String,
    },
    Genre: {
        type: String,
    },
    Director: {
        type: String,
    },
    Writer: {
        type: String,
    },
    Actors: {
        type: String,
    },
    Plot: {
        type: String,
    },
    Language: {
        type: String,
    },
    Country: {
        type: String,
    },
    Awards: {
        type: String,
    },
    Poster: {
        type: String,
    },
    BoxOffice: {
        type: String,
    },
    imdbID: {
        type: String,
    },
    imdbRating: {
        type: String,
    },
    Stills: [{
        type: String,
    }],
    
})

export default mongoose.model("MovieData", movieDataSchema);