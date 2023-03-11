import mongoose from "mongoose";
const { Schema } = mongoose;

const drinkSchema = new Schema({
    name: String,
    image: String,
    price: String,
    type: {
        type: String,
        enum: ['caffee', 'juice','offre']
    }
})

const Drink = mongoose.model("Drink", drinkSchema);
export default Drink;