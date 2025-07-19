import express from "express";
import { createProduct } from "../controllers/productController.js";
import { protect, isAdmin } from "../middleware/authMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

router.post(
  "/products",
  protect,
  isAdmin,
  upload.single("image"), // Multer handles 'image' field
  createProduct
);

export default router;
