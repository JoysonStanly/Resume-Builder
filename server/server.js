import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/db.js";
import userRouter from "./routes/userRoutes.js";
import resumeRouter from "./routes/resumeRoutes.js";
import aiRouter from "./routes/aiRoutes.js";
import googleAuthRouter from "./routes/googleAuth.js";

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = process.env.CLIENT_URL
    ? { origin: process.env.CLIENT_URL }
    : { origin: true };

// Database connection
await connectDB()

app.use(express.json())
app.use(cors(corsOptions))

app.get('/', (req, res)=> res.send("Server is live..."))
app.use('/api/users', userRouter)
app.use('/api/resumes', resumeRouter)
app.use('/api/ai', aiRouter)
app.use('/api/auth', googleAuthRouter)

if (process.env.VERCEL !== '1') {
    app.listen(PORT, ()=>{
        console.log(`Server is running on port ${PORT}`);
    });
}

export default app;