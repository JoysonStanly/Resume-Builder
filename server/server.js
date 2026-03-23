import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import connectDB from "./configs/db.js";
import userRouter from "./routes/userRoutes.js";
import resumeRouter from "./routes/resumeRoutes.js";
import aiRouter from "./routes/aiRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;


connectDB()
  .then(() => console.log("✅ DB Connected"))
  .catch((err) => console.log("❌ DB Error:", err.message));


app.use(express.json());

app.use(
  cors({
    origin: process.env.CLIENT_URL, // frontend URL
    credentials: true,
  })
);


app.get("/", (req, res) => {
  res.send("Server is live 🚀");
});

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    mongodb:
      mongoose.connection.readyState === 1
        ? "connected"
        : "disconnected",
  });
});

app.use("/api/users", userRouter);
app.use("/api/resumes", resumeRouter);
app.use("/api/ai", aiRouter);


app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});