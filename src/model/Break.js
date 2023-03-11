import mongoose from "mongoose";
const { Schema } = mongoose;

const breakSchema = new Schema({
    name: String,
    image: String,
    description: String,
    price: String,
})

const Break = mongoose.model("Break", breakSchema);
export default Break;