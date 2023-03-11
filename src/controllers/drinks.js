import Drink from '../model/Drink'

const createDrink = async (req, res) => {
    const drinks = await Drink.create(req.body)
    return res.send(drinks)
}

const getAllDrink = async (req, res) => {
    const drinks = await Drink.find()
    const caffees = await Drink.find({type: 'caffee'})
    const juices = await Drink.find({type: 'juice'})
    const offers = await Drink.find({type: 'offre'})
    return res.render("pages/drink",{caffees,juices,offers})
}


const getAllDrinks = async (req, res) => {
    const drinks = await Drink.find()
    return res.send(drinks)

}

const findDrinkByUser = async (req, res) => {
    console.log("params!!!!",req.params.userId);
    const drinks = await Drink.find({assignedTo: req.params.userId}).populate('assignedTo')
    return res.send(drinks)
}

const deleteDrink = async (req, res) => {
    const drinks = await Drink.findByIdAndDelete(req.params.id);
    return res.send(drinks);
}

/* = async (req, res) => {
    const drinkId = req.params._id
    const checkIffoodExists = await Drink.findById(foodId)
    console.log('foood', checkIffoodExists);
    
    if(!checkIffoodExists) {
        return res.status(404).json({ message: "error" })
    }

    const drinks =  await Drink.findByIdAndRemove(req.params._id)
    return res.send(drinks)
} */

const updateDrink = async (req, res) => {
    const drinks = await Drink.findByIdAndUpdate(req.params.id, req.body, {new:true});
    return res.send(drinks);
}

export { createDrink, getAllDrink,deleteDrink,updateDrink,findDrinkByUser,getAllDrinks }