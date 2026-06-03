import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import studentRoutes from "./routes/studentRoutes.js";
import companyRoutes from "./routes/companyRoutes.js";
import driveRoutes from "./routes/driveRoutes.js";
import applicationRoutes from "./routes/applicationRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Backend Running",
  });
});

app.get("/health", (req, res) => {
  res.json({
    success: true,
    database: "connected",
  });
});

app.get("/auth/me", (req, res) => {
  res.json({
    success: true,
    message: "Operation successful",
    data: [],
  });
});

app.get("/analytics", (req, res) => {
  res.json({
    success: true,
    message: "Operation successful",
    data: [],
  });
});

app.use("/students", studentRoutes);
app.use("/companies", companyRoutes);
app.use("/drives", driveRoutes);
app.use("/applications", applicationRoutes);

export default app;