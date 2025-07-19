import express from "express";
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";
import { protect, isAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public Routes
router.get("/", getAllProducts);
router.get("/:id", getProductById);

// Admin Routes
router.post("/admin", protect, isAdmin, createProduct);
router.put("/admin/:id", protect, isAdmin, updateProduct);
router.delete("/admin/:id", protect, isAdmin, deleteProduct);

export default router;
