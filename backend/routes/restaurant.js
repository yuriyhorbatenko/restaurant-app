import express from "express";
import formidable from "express-formidable";

const router = express.Router();

// middleware
import { requireSignin, restaurantUser } from "../middlewares/index.js";
// controllers
import {create, restaurants, userRestaurants, remove, read, update} from "../controllers/restaurant.js";

router.get("/restaurants", restaurants);
router.get("/user-restaurants", requireSignin, userRestaurants);
router.get("/restaurant/:restaurantId", read);
router.post("/create-restaurant", requireSignin, formidable(), create);
router.put("/update-restaurant/:restaurantId", requireSignin, restaurantUser, formidable(), update);
router.delete("/delete-restaurant/:restaurantId", requireSignin, restaurantUser, remove);

export default router
