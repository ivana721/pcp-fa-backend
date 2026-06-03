import mongoose from "mongoose";

const interviewSchema = new mongoose.Schema({
  interviewId: {
    type: String,
    required: true,
    unique: true,
  },
  applicationId: String,
  interviewer: String,
  round: String,
  scheduledAt: Date,
  result: {
    type: String,
    enum: ["pending", "pass", "fail"],
    default: "pending",
  },
});

export default mongoose.model("Interview", interviewSchema);