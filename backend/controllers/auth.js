import User from "../models/user.js";
import jwt from "jsonwebtoken"

export const register = async(req, res) => {
    console.log(req.body);
    const {firstName, lastName, email, password} = req.body;

  // validation
  if (!firstName) return res.status(400).send("First name is required");
  if (!lastName) return res.status(400).send("Last name is required");
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
     
      let token = jwt.sign({_id: user._id}, "shhhhhhared-secret", {
        expiresIn: "7d"
      });
      
      res.json({token, user: {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
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



export const forgotPassword = (req, res) => {
  const {email} = req.body;
  User.findOne({ email }, (err, user) => {
    if (err || !user) {
        return res.status(400).json({
            error: 'User with that email does not exist'
        });
    }

  });
}


