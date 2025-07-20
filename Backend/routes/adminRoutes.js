import express from "express";
import { createProduct } from "../controllers/productController.js";
import { protect, isAdmin } from "../middleware/authMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";
import { deleteUser, getAllUsers } from "../controllers/userController.js";
const router = express.Router();

router.post(
  "/products",
  protect,
  isAdmin,
  upload.single("image"), // Multer handles 'image' field
  createProduct
);





// Get all users (Optional admin dashboard)
router.get("/users", protect, isAdmin, getAllUsers);

// Delete user by ID
router.delete("/users/:id", protect, isAdmin, deleteUser);


export default router;
