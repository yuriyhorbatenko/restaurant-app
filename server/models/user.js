import mongoose from "mongoose";
import bcrypt from "bcrypt";

const {Schema} = mongoose;

const userSchema = new Schema({
    firstName: {
        type: String,
        trim: true,
        required: "Name is required"
    },
    lastName: {
        type: String,
        trim: true,
        required: "Name is required"
    },
    email: {
        type: String,
        trim: true,
        required: "Email is required",
        unique: true
    },
    password: {
        type: String,
        trim: true,
        required: "Password is required",
        min: 6,
        max: 64
    }
}, 
    {timestamps: true}
);

userSchema.pre("save", function(next){
    let user = this;
    if(user.isModified("password")) {
        return bcrypt.hash(user.password, 12, function(err, hash){
            if(err) {
                console.log("BCRYPT HASH FAIL " + err);
                return next(err);
            }
            user.password = hash;
            return next();
        });
    }
        else {
            return next();
        }
});

userSchema.methods.comparePassword = function (password, next) {
    bcrypt.compare(password, this.password, function(err, match) {
        if(err) {
            console.log("Compare Password ERR", err);
            return next(err, false);
        }
        console.log("Password Match", match);
        return next(null, match);
    });
};

export default mongoose.model("User", userSchema);