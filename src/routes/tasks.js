import express from "express";
const router = express.Router()
import {creatrTask} from "../controllers/task"

router.post('/tasks',creatrTask)
router.get('/tasks',getALLTasks)

export default router