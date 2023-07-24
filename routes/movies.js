import { Router } from "express";
import * as controllers from "../controllers/movies.js"

const router = Router();

router.get('/', controllers.getMovies)
router.get("/:id", controllers.getMovieById);
router.get("/year/:year", controllers.getMoviesByYear);
router.get("/genre/:genre", controllers.getMoviesByGenre);
router.get("/country/:country", controllers.getMoviesByCountry);
router.get("/stills/imdb/:id", controllers.getMovieStillsByIMDB);
router.get('/stills/:id', controllers.getMovieStillsByID)
router.get('/poster/:id', controllers.getPosterByID)

router.delete("/delete/:id", controllers.deleteMovieById);



export default router