import { Router } from "express";
import * as controllers from "../controllers/movies.js"

const router = Router();

router.get('/', controllers.getMovies)
router.get("/:id", controllers.getMovieById);


router.get("/year/:year", controllers.getMoviesByYear);


export default router