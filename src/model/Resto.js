import mongoose from "mongoose";
const { Schema } = mongoose;

const restoSchema = new Schema({
    name: String,
    image: String,
    description: String,
})

const Resto = mongoose.model("Resto", restoSchema);
export default Resto;