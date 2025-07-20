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

// Admin Routes (Fixed the route paths)
router.post("/", protect, isAdmin, createProduct);          // POST /api/products
router.put("/:id", protect, isAdmin, updateProduct);        // PUT /api/products/:id
router.delete("/:id", protect, isAdmin, deleteProduct);     // DELETE /api/products/:id

export default router;
