import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import path from "path";

// Routes
import authRoutes from "./routes/auth.js";
import productRoutes from "./routes/productRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

// DB Connection
import connectDB from "./config/db.js";

// Initialize
dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// Connect to DB
connectDB(); // OR: mongoose.connect(process.env.MONGO_URL)

// Public folder for images
app.use("/uploads", express.static(path.join(process.cwd(), "/uploads")));

// Route Middleware
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/admin", adminRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
