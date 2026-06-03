import mongoose from "mongoose";

const AssessmentDataSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      required: true,
    },
    dataUrl: {
      type: String,
      required: true,
      unique: true,
    },
    payload: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
    syncedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const AssessmentDataset = mongoose.model("AssessmentDataset", AssessmentDataSchema);

export default AssessmentDataset;
