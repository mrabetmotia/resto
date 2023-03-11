import Food from '../model/Food'

const createFood = async (req, res) => {
    const foods = await Food.create(req.body)
    return res.send(foods)
}

const getAllFood = async (req, res) => {
    const pizzas = await Food.find({type: 'pizza'})
    const burgers = await Food.find({type: 'burger'})
    const sandwichs = await Food.find({type: 'sandwich'})
    return res.render("pages/food",{pizzas,burgers,sandwichs})
}

const getAllFoods = async (req, res) => {
    const foods = await Food.find()
    return res.send(foods)
}

const findFoodByUser = async (req, res) => {
    console.log("params!!!!",req.params.userId);
    const foods = await Food.find({assignedTo: req.params.userId}).populate('assignedTo')
    return res.send(foods)
}

const deleteFood = async (req, res) => {
    const foods = await Food.findByIdAndDelete(req.params.id);
    return res.send(foods);
}

/* async (req, res) => {
    const foodId = req.params._id
    const checkIffoodExists = await Food.findById(foodId)
    console.log('food', checkIffoodExists);
    
    if(!checkIffoodExists) {
        return res.status(404).json({ message: "error" })
    }

    const foods =  await Food.findByIdAndRemove(req.params._id)
    return res.send(foods)
}
 */
const updateFood = async (req, res) => {
    const foods = await Food.findByIdAndUpdate(req.params.id, req.body, {new:true});
    return res.send(foods);
}

export { createFood, getAllFood,deleteFood,updateFood,findFoodByUser,getAllFoods }