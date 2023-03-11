import Resto from '../model/Resto'

const createResto = async (req, res) => {
    const restos = await Resto.create(req.body)
    return res.send(restos)
}

const getAllResto= async (req, res) => {
    const restos = await Resto.find()
    return res.send(restos)
}

const getAllRestos= async (req, res) => {
    const restos = await Resto.find()
    return res.render("pages/index",{restos})
}

const findRestoByUser = async (req, res) => {
    console.log("params!!!!",req.params.userId);
    const restos = await Resto.find({assignedTo: req.params.userId}).populate('assignedTo')
    return res.send(restos)
}

const deleteResto = async (req, res) => {
    const restos = await Resto.findByIdAndDelete(req.params.id);
    return res.send(restos);
}

const updateResto = async (req, res) => {
    const restos = await Resto.findByIdAndUpdate(req.params.id, req.body, {new:true});
    return res.send(restos);
}

export { createResto, getAllResto,deleteResto,updateResto,findRestoByUser,getAllRestos }