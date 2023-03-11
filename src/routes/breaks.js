import express from "express";
const router = express.Router();
import {createBreak, getAllBreak,deleteBreak,updateBreak,getAllBreaks} from '../controllers/breaks';

router.post("/breaks", createBreak)
router.get("/break", getAllBreaks)
router.get("/breaks", getAllBreak)
router.delete("/breaks/:id", deleteBreak)
router.put("/breaks/:id", updateBreak)


export default router;