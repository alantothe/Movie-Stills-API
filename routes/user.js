import { Router } from "express";
import * as controllers from "../controllers/user.js"

const router = Router();



router.post('/register', controllers.registerUser)
router.get ('/', controllers.getUsers)
router.delete("/:id", controllers.deleteUserById);




export default router