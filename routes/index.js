import { Router } from "express";
import moviesRoutes from "./movies.js";
import registerUser from "./user.js";


const router = Router();

router.get("/", (req, res) => {
  res.send("This is the api root!");
});

router.use("/movies", moviesRoutes);
router.post("/register", registerUser);

export default router;
