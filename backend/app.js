import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import testRoutes from "./routes/testRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
import { errorHandler } from "./middleware/errorMiddleware.js";

const app = express();
app.use(cors({
  origin: "https://prime-task-mu.vercel.app",
  credentials: true
}));
app.use(express.json());
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/test", testRoutes);
app.use("/api/v1/tasks", taskRoutes);

app.use(errorHandler);

export default app;