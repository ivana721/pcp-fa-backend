import express from "express";

const router = express.Router();

router.get("/placements", async (req, res) => {
  res.json({
    success: true,
    message: "Operation successful",
    data: {
      totalApplications: 0,
      shortlistedCount: 0,
      selectedCount: 0,
      rejectedCount: 0,
    },
  });
});

router.get("/departments", async (req, res) => {
  res.json({
    "success": true,
    "message": "Operation successful",
    "data": []
  });
});

router.get("/companies", async (req, res) => {
  res.json({
    success: true,
    message: "Operation successful",
    data: [],
  });
});

export default router;