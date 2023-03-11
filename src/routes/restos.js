import express from "express";
const router = express.Router();
import Resto from '../model/Resto';
import { createResto, getAllResto,deleteResto ,updateResto,getAllRestos } from '../controllers/restos';

//-------crud start--------------
 router.post("/restos", createResto)

router.get("/restos", getAllRestos) 

router.get("/restaurants", getAllResto)

 router.delete("/restos/:id", deleteResto)

router.put("/restos/:id", updateResto)
 

//------------end----------------------------------


//-----------------router page---------------------
router.get("/", async (req, res) => {
        let restos = await Resto.find();
        return res.render("pages/index", {restos});
})
router.get("/food", async (req, res) => {
        let restos = await Resto.find();
        return res.render("pages/food", {restos});
})
router.get('/drink', async (req, res) => {
        let restos = await Resto.find();
        return res.render("pages/drink", {restos});
})
router.get('/contact', async (req, res) => {
        let restos = await Resto.find();
        return res.render("pages/contact", {restos});
})
router.get('/breakfast', async (req, res) => {
        let restos = await Resto.find();
        return res.render("pages/breakfast", {restos});
})
router.get('/delevry', async (req, res) => {
        let restos = await Resto.find();
        return res.render("pages/delevry", {restos});
})
router.get('/inscription', async (req, res) => {
        let restos = await Resto.find();
        return res.render("pages/inscription", {restos});
})
router.get('/login', async (req, res) => {
        let restos = await Resto.find();
        return res.render("pages/login", {restos});
})
router.get('/order', async (req, res) => {
        let restos = await Resto.find();
        return res.render("pages/order", {restos});
})

//-----------------router page admin---------------------
router.get('/admin', async (req, res) => {
        let restos = await Resto.find();
        return res.render("admin/indexadmin", {restos});
})
router.get('/foodadmin', async (req, res) => {
        let restos = await Resto.find();
        return res.render("admin/food", {restos});
})
router.get('/drinkadmin', async (req, res) => {
        let restos = await Resto.find();
        return res.render("admin/drink", {restos});
})
router.get('/breakadmin', async (req, res) => {
        let restos = await Resto.find();
        return res.render("admin/break", {restos});
})
router.get('/specialityadmin', async (req, res) => {
        let restos = await Resto.find();
        return res.render("admin/speciality", {restos});
})
//---------------------------end------------------------------
export default router;