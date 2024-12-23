import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./database/db.mjs";
import userRoute from "./routes/user.route.mjs";
import courseRoute from "./routes/course.route.mjs";
import mediaRoute from "./routes/media.route.mjs";
import purchaseRoute from "./routes/purchaseCourse.route.mjs";
import courseProgressRoute from "./routes/courseProgress.route.mjs";
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config({});

// call database connection here
connectDB();
const app = express();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PORT = process.env.PORT || 3000;

// default middleware
app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin: true,  // Allow all origins since both are deployed together
    credentials: true
}));

// apis
app.use("/api/v1/media", mediaRoute);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/course", courseRoute);
app.use("/api/v1/purchase", purchaseRoute);
app.use("/api/v1/progress", courseProgressRoute);

// Serve static frontend files from client/dist
app.use(express.static(path.join(__dirname, "/client/dist")));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
