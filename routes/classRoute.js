import express from 'express';

import {
  createClass,
  getClassById,
} from "../controllers/classController.js";
const router = express.Router();

router.post("/create", createClass);
router.get("/:id", getClassById);

export default router;
