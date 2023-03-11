import Break from '../model/Break'

const createBreak = async (req, res) => {
    const breaks = await Break.create(req.body)
    return res.send(breaks)
}

const getAllBreak = async (req, res) => {
    const breaks = await Break.find()
    return res.render("pages/Breakfast",{breaks})
}

const getAllBreaks = async (req, res) => {
    const breaks = await Break.find()
    return res.send(breaks)
}

const findBreakByUser = async (req, res) => {
    console.log("params!!!!",req.params.userId);
    const breaks = await Break.find({assignedTo: req.params.userId}).populate('assignedTo')
    return res.send(breaks)
}

const deleteBreak = async (req, res) => {
    const breaks = await Break.findByIdAndDelete(req.params.id);
    return res.send(breaks);
}



/*  async (req, res) => {
    const BreakId = req.params._id
    const checkIfBreakExists = await Break.findById(BreakId)
    console.log('task', checkIfBreakExists);
    
    if(!checkIfBreakExists) {
        return res.status(404).json({ message: "error" })
    }

    const breaks =  await Break.findByIdAndRemove(req.params._id)
    return res.send(breaks)
} */

const updateBreak = async (req, res) => {
    const breaks = await Break.findByIdAndUpdate(req.params.id, req.body, {new:true});
    return res.send(breaks)
}

export { createBreak, getAllBreak,deleteBreak,updateBreak,findBreakByUser,getAllBreaks }