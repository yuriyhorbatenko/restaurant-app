import express from "express";
import formidable from "express-formidable";

const router = express.Router();

// middleware
import { requireSignin, restaurantUser } from "../middlewares";
// controllers
import {create, restaurants, userRestaurants, remove, read, update} from "../controllers/restaurant";

router.post("/create-restaurant", requireSignin, formidable(), create);
router.get("/restaurants", restaurants);
router.get("/user-restaurants", requireSignin, userRestaurants);
router.delete("/delete-restaurant/:restaurant_id", requireSignin, restaurantUser, remove);
router.get("/restaurant/:restaurant_id", read);
router.put("/update-restaurant/:restaurant_id", requireSignin, restaurantUser, formidable(), update);

module.exports = router;