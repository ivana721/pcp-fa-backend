import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  applicationId: {
    type: String,
    required: true,
    unique: true,
  },
  currentRound: String,
  status: String,
  appliedAt: Date,

  student: {
    type: String,
  },

  drive: {
    type: String,
  },
});

export default mongoose.model("Application", applicationSchema);