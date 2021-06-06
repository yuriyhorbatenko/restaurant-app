import Restaurant from "../models/restaurant";
import fs from "fs";

export const create = async (req, res) => {
  try {
    let fields = req.fields;
    let restaurant = new Restaurant(fields);
    restaurant.postedBy = req.user._id;

    hotel.save((err, result) => {
      if (err) {
        console.log("saving hotel err => ", err);
        res.status(400).send("Error saving");
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
  let all = await Restaurant.find({}).limit(24).populate("postedBy", "_id name").exec();
  // console.log(all);
  res.json(all);
};

export const userRestaurants = async (req, res) => {
  let all = await Restaurant.find({ postedBy: req.user._id }).populate("postedBy", "_id name").exec();
  // console.log(all);
  res.send(all);
};

export const remove = async (req, res) => {
  let removed = await Restaurant.findByIdAndDelete(req.params.restaurant_id).select("-image.data").exec();
  res.json(removed);
};

export const read = async (req, res) => {
  let hotel = await Restaurant.findById(req.params.restaurant_id).populate("postedBy", "_id name").select("-image.data").exec();
    res.json(hotel);
};

export const update = async (req, res) => {
  try {
    let fields = req.fields;
    let files = req.files;

    let data = { ...fields };

    if (files.image) {
      let image = {};
      image.data = fs.readFileSync(files.image.path);
      image.contentType = files.image.type;

      data.image = image;
    }

    let updated = await Hotel.findByIdAndUpdate(req.params.hotelId, data, {
      new: true,
    }).select("-image.data");

    res.json(updated);
  } catch (err) {
    console.log(err);
    res.status(400).send("Hotel update failed. Try again.");
  }
};


