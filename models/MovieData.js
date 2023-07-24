import mongoose from "mongoose";
let movieDataSchema = new mongoose.Schema({
    Title: {
        type: String,
        trim: true,
    },
    Year: {
        type: Number,
    },
    Rated: {
        type: String,
    },
    Released: {
        type: Date,
    },
    Runtime: {
        type: Number,
    },
    Genre: {
        type: [String],
    },
    Director: {
        type: [String],
    },
    Writer: {
        type: [String],
    },
    Actors: {
        type: [String],
    },
    Plot: {
        type: String,
    },
    Language: {
        type: [String],
    },
    Country: {
        type: [String],
    },
    Awards: {
        type: String,
    },
    Poster: {
        type: String,
    },
    BoxOffice: {
        type: Number,
    },
    imdbID: {
        type: String,
    },
    imdbRating: {
        type: Number,
    },
    Stills: [{
        type: String,
    }],
})

export default mongoose.model("MovieData", movieDataSchema);