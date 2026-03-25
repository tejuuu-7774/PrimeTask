import express from "express";
import {
  createTask,
  getTasks,
  updateTask,
  deleteTask
} from "../controllers/taskController.js";
import { verifyToken } from "../middleware/authMiddleware.js";
import { body } from "express-validator";
import { validate } from "../middleware/validationMiddleware.js";

const router = express.Router();

router.post(
  "/",
  verifyToken,
  [body("title").notEmpty().withMessage("Title is required")],
  validate,
  createTask
);
router.get("/", verifyToken, getTasks);
router.put("/:id", verifyToken, updateTask);
router.delete("/:id", verifyToken, deleteTask);

export default router;