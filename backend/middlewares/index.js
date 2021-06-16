import expressJwt from "express-jwt";
import Restaurant from "../models/restaurant.js";

const requireSignin = expressJwt({secret: "shhhhhhared-secret", algorithms: ["base64"]});

const restaurantUser = async (req, res, next) => {
  let restaurant = await Restaurant.findById(req.params.restaurantId).exec();
  let user = restaurant.postedBy._id.toString() === req.user._id.toString();
  if (!user) {
    return res.status(403).send("Unauthorized");
  }
  next();
};

export { requireSignin, restaurantUser }
