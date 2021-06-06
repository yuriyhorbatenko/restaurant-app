import expressJwt from "express-jwt";
import Restaurant from "../models/restaurant";

// req.user
export const requireSignin = expressJwt({
  // secret, expiryDate
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"],
});

export const restaurantUser = async (req, res, next) => {
  let restaurant = await Restaurant.findById(req.params.restaurant_id).exec();
  let user = restaurant.postedBy._id.toString() === req.user._id.toString();
  if (!user) {
    return res.status(403).send("Unauthorized");
  }
  next();
};
