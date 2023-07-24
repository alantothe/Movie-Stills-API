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

export const getMovieById = async (req, res) =>{
    try{
        const { id } = req.params;
        const movieData = await MovieData.findById(id);  // find movie by id

          // if no movie data is found with the given id, return a 404 error
      if (!movieData) {
        return res.status(404).json({ message: "No movie data found with the given id" });
      }
  
      res.json(movieData);  // respond with the found movie data
  

    }catch(error) {
            console.log(error);
            res.status(500).json({ error: error.message });

    }
} 

export const getMoviesByYear = async (req, res) =>{
    try{
        const { year } = req.params;
        const movieData = await MovieData.find({ Year: year });  // find movies by year


          // if no movie data is found with the given Year, return a 404 error
      if (!movieData) {
        return res.status(404).json({ message: "No movie data found with the given Year" });
      }
  
      res.json(movieData);  // respond with the found movie data
  

    }catch(error) {
            console.log(error);
            res.status(500).json({ error: error.message });

    }
} 