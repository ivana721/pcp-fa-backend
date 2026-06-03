import express from "express";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    res.json({
      success: true,
      message: "Operation successful",
      data: {
        totalFetched: 0,
        inserted: 0,
        duplicates: 0,
        rejected: 0,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

export default router;