import { Router } from "express";
import moviesRoutes from "./movies.js";


const router = Router();

router.get("/", (req, res) => {
  res.send("This is the api root!");
});

router.use("/movies", moviesRoutes);

export default router;
