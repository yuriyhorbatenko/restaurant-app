import express from "express";

const router = express.Router();

import {register, login, forgotPassword} from "../controllers/auth"

router.post("/register", register);
router.post("/login", login);
router.put("/forgot-password", forgotPassword);


module.exports = router;