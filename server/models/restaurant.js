import mongoose from "mongoose";

const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema;

const restaurantSchema = new Schema(
    {
        address: {
        type: String,
        required: "Address is required"
        },
        borough: {
        type: String,
        required: "Borough is required"
        },
        cuisine: {
        type: String
        },
        grades: {
        type: Array,
        required: "Price is required",
        },
        name: {
        type: String
        },
        postedBy: {
            type: ObjectId,
            ref: "User",
        },
        restaurant_id: {
        type: ObjectId
        }
    },
    { timestamps: true }
);

export default mongoose.model("Restaurant", restaurantSchema);