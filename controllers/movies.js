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

export const getMoviesByGenre = async (req, res) =>{
    try{
        const { genre } = req.params;
        const movieData = await MovieData.find({ Genre: genre });  
        
        if (!movieData || movieData.length === 0) {
            return res.status(404).json({ message: "No movie data found with the that Genre" });
        }
        
        res.json(movieData);  

    } catch(error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}

export const getMoviesByCountry = async (req, res) =>{
    try{
        const { country } = req.params;
        const movieData = await MovieData.find({ Country: country });  
        
        if (!movieData || movieData.length === 0) {
            return res.status(404).json({ message: "No movie data found for the given country" });
        }
        
        res.json(movieData);  

    } catch(error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}

export const getMovieStillsByIMDB = async (req, res) => {
    try {
        const { id } = req.params;
        const movie = await MovieData.findOne({ imdbID: id });  
        
        if (!movie) {
            return res.status(404).json({ message: "No movie data found for the given imdbID" });
        }

        const stills = movie.Stills;  
        res.json(stills);  
    } catch(error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}


export const getMovieStillsByID = async (req, res) => {
    try {
        const { id } = req.params;
        const movie = await MovieData.findOne({ _id: id });  
        
        if (!movie) {
            return res.status(404).json({ message: "No movie data found for the given imdbID" });
        }

        const stills = movie.Stills;  
        res.json(stills);  
    } catch(error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}
export const getPosterByID = async (req, res) => {
    try {
        const { id } = req.params;
        const movie = await MovieData.findOne({ _id: id });  
        
        if (!movie) {
            return res.status(404).json({ message: "No movie data found for the given imdbID" });
        }

        const poster = movie.Poster;  
        res.json(poster);  
    } catch(error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}

export const deleteMovieById = async (req, res) => {
    try {
        const { id } = req.params;
        const movie = await MovieData.findByIdAndDelete(_id);
        
        if (!movie) {
            return res.status(404).json({ message: "Invaild ID " });
        }

        res.json({ message: 'Movie deleted successfully' });
    } catch(error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}

