import Restaurant from "../models/restaurant.js";

export const create = async (req, res) => {
  try {
    let fields = req.fields;
    let restaurant = new Restaurant(fields);
    restaurant.postedBy = req.user._id;

    restaurant.save((err, result) => {
      if (err) {
        console.log("SAVING RESTAURANT ERROR => ", err);
        res.status(400).send("ERROR SAVING");
      }
      res.json(result);
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      err: err.message,
    });
  }
};

export const restaurants = async (req, res) => {
  let all = await Restaurant.find({}).limit(24).populate("postedBy", "_id firstName lastName").exec();
  // console.log(all);
  res.json(all);
};

export const userRestaurants = async (req, res) => {
  let all = await Restaurant.find({ postedBy: req.user._id }).populate("postedBy", "_id firstName lastName").exec();
  // console.log(all);
  res.send(all);
};

export const remove = async (req, res) => {
  let removed = await Restaurant.findByIdAndDelete(req.params.restaurantId).exec();
  res.json(removed);
};

export const read = async (req, res) => {
  let restaurant = await Restaurant.findById(req.params.restaurantId).populate("postedBy", "_id firstName lastName").exec();
    res.json(restaurant);
};

export const update = async (req, res) => {
  try {
    let fields = req.fields;
    let data = { ...fields };
    let updated = await Restaurant.findByIdAndUpdate(req.params.restaurantId, data, {
      new: true,
    });

    res.json(updated);
  } catch (err) {
    console.log(err);
    res.status(400).send("Restaurant update failed. Try again.");
  }
};


