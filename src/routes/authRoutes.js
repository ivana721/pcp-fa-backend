import express from "express";

const router = express.Router();

router.post("/register", async (req, res) => {
  res.status(201).json({
    success: true,
    message: "Operation successful",
    data: req.body,
  });
});

router.post("/login", async (req, res) => {
  res.json({
    success: true,
    message: "Operation successful",
    data: {
      token: "sample-jwt-token",
      user: {
        email: req.body.email,
        role: "student",
      },
    },
  });
});

router.get("/me", async (req, res) => {
  res.json({
    success: true,
    message: "Operation successful",
    data: {
      email: "user@example.com",
      role: "student",
    },
  });
});

export default router;