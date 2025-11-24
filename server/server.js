import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import connectDB from "./config/db.js";

// Routes
import userRoutes from "./routes/userRoutes.js";
import listingRoutes from "./routes/listingRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";

// Error handlers
import notFound from "./middleware/notFound.js";
import errorHandler from "./middleware/errorHandler.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// DB Connection
connectDB();

// Test Route
app.get("/", (req, res) => res.send("Server running successfully!"));

// API Routes
app.use("/api/users", userRoutes);
app.use("/api/listings", listingRoutes);
app.use("/api/upload", uploadRoutes);

// Static folder for uploaded images
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

// Error Handling
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
