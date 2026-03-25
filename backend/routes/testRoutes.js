import express from "express";
import { verifyToken } from "../middleware/authMiddleware.js";
import { isAdmin } from "../middleware/roleMiddleware.js";

const router = express.Router();

// USER ACCESS
router.get("/user", verifyToken, (req, res) => {
  res.json({
    msg: "Welcome User",
    user: req.user
  });
});

// ADMIN ACCESS
router.get("/admin", verifyToken, isAdmin, (req, res) => {
  res.json({
    msg: "Welcome Admin"
  });
});

export default router;