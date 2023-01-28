import express from "express";
const router = express.Router();
import { registerController, createPostController } from "../controllers";

router.post("/register", registerController.register);  
router.put("/createPost", createPostController.createPost);

export default router;
