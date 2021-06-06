import User from "../models/user";
import jwt from "jsonwebtoken"
import { response } from "express";

export const register = async(req, res) => {
    console.log(req.body);
    const {name, email, password} = req.body;

  // validation
  if (!name) return res.status(400).send("Name is required");
  if (!email) return res.status(400).send("Email is required");
  if (!password || password.length < 6)
    return res
      .status(400)
      .send("Password is required and it should be min 6 characters long");
  let userExist = await User.findOne({ email }).exec();
  if (userExist) return res.status(400).send("Email is already in use");

  // register
  const user = new User(req.body);
  try {
    await user.save();
    console.log("USER CREATED", user);
    return res.json({ ok: true });

  } catch (err) {
    console.log("CREATE USER FAILED", err);
    return res.status(400).send("Error. Try again.");
  }
};


export const login = async (req, res) => {
  const {email, password} = req.body;
  try {
    let user = await User.findOne({email}).exec();
    if (!user) res.status(400).send("User with that email not found");

    // compare password
    user.comparePassword(password, (err, match) => {
      console.log("Compare Password in Login Err", err);
      if(!match || err) return res.status(400).send("Wrong password. Try again");
     
      let token = jwt.sign({_id: user._id}, process.env.JWT_SECRET, {
        expiresIn: "7d"
      });
      
      res.json({token, user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
      }});
    })

  } catch (err) {
    console.log("Login Err", err);
    res.status(400).send("Sign-in failed");
  }
}