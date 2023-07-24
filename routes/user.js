import { Router } from "express";
import * as controllers from "../controllers/user.js"

const router = Router();



router.post('/register', controllers.registerUser)



export default router