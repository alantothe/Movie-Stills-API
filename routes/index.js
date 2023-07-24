import { Router } from "express";
import moviesRoutes from "./movies.js";
import usersRoutes from "./user.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("This is the api root!");
});

router.use("/movies", moviesRoutes);
router.use('/users', usersRoutes);

export default router;
