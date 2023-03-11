import express from "express";
const router = express.Router();
import  {createDrink, getAllDrink,deleteDrink,updateDrink,findDrinkByUser,getAllDrinks} from '../controllers/drinks';

router.post("/drinks", createDrink)
router.get("/newdrinks", getAllDrinks)
router.get("/drinks", getAllDrink)
router.delete("/drinks/:id", deleteDrink)
router.put("/drinks/:id", updateDrink)


export default router;