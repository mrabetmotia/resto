import express from "express";
const router = express.Router();
import {createFood, getAllFood,deleteFood,updateFood,findTasksByUser,getAllFoods} from '../controllers/foods';

router.post("/foods", createFood)
router.get("/foods", getAllFood)
router.get("/newfood", getAllFoods)
router.put("/foods/:id", updateFood)
router.delete("/foods/:id", deleteFood )

export default router;