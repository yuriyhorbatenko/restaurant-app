import express from "express";
import {register, login, forgotPassword} from "../controllers/auth.js"

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.put("/forgot-password", forgotPassword);

export default router
