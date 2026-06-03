import express from "express";

import {
  createInterview,
  getInterviews,
  getInterviewById,
  updateInterview,
} from "../controllers/interviewController.js";

const router = express.Router();

router.post("/", createInterview);
router.get("/", getInterviews);
router.get("/:id", getInterviewById);
router.patch("/:id", updateInterview);

export default router;