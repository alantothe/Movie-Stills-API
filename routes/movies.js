import { Router } from "express";
import * as controllers from "../controllers/movies.js"

const router = Router();

router.get('/', controllers.getMovies)

export default router