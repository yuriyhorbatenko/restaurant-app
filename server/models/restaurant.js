import mongoose from "mongoose";

const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema;

const restaurantSchema = new Schema(
    {
        name: {
        type: String,
        required: "Name is required"
        },

        cuisine: {
        type: String,
        required: "Cuisine is required"
        },

        street: {
        type: String,
        required: "Street is required"
        },

        city: {
        type: String,
        required: "City is required"
        },

        state: {
        type: String,
        required: "State is required"
        },

        zip: {
        type: Number,
        required: "Zip is required"
        },

        comment: {
        type: String,
        maxlength: 1000,
        required: "Comment is required"
        },
        
        rating: {
        type: String,
        required: "Rating is required"
        },
        
        postedBy: {
            type: ObjectId,
            ref: "User",
        }
    },
    { timestamps: true }
);

export default mongoose.model("Restaurant", restaurantSchema);