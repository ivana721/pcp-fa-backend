const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Backend Running"
  });
});

module.exports = app;

app.get("/analytics", (req, res) => {
  res.json({
    success: true,
    message: "Operation successful",
    "data": []
  });
});

app.get("/auth/me", (req, res) => {
  res.json({
    success: true,
    message: "Operation successful",
    "data": []
  });
});

app.get("/health", (req, res) => {
  res.json({
    success: true,
    database: "Connected",
    "data": []
  });
});