import mongoose from "mongoose";
const { Schema } = mongoose;

const foodSchema = new Schema({
    name: String,
    image: String,
    price: String,
    type: {
        type: String,
        enum: ['burger', 'pizza','sandwich']
    }
})

const Food = mongoose.model("Food", foodSchema);
export default Food;