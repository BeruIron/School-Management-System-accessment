import express from 'express';
import {
  createStudent,
  getStudentById,
  updateById,
} from "../controllers/studentController.js";
const router = express.Router();

router.post("/create", createStudent);
router.get("/:id", getStudentById);
router.put("/update/:id", updateById);

export default router;
