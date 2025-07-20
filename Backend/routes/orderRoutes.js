import express from "express";
import {
  createOrder,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
  getAllOrders,
  updateOrderToDelivered,
} from "../controllers/orderController.js";
import { protect, isAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

// 🔒 Authenticated user routes
router.post("/", protect, createOrder);               // Create order
router.get("/myorders", protect, getMyOrders);        // Get logged-in user's orders
router.get("/:id", protect, getOrderById);            // Get order by ID
router.put("/:id/pay", protect, updateOrderToPaid);   // Update to paid

// 🔒 Admin routes
router.get("/", protect, isAdmin, getAllOrders);                      // Get all orders
router.put("/:id/deliver", protect, isAdmin, updateOrderToDelivered); // Mark as delivered

export default router;
