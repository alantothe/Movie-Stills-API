import MovieData from "../models/MovieData.js";

export const getMovies = async(req, res) => {
    try{
    let movies = await MovieData.find()
    res.json(
        movies
    )
    }catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
      }


}