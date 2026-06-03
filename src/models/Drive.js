import mongoose from "mongoose";

const driveSchema = new mongoose.Schema({
  driveId: {
    type: String,
    required: true,
    unique: true,
  },
  title: String,
  mode: String,
  location: String,
  registrationDeadline: Date,
  rounds: [String],
  status: String,
});

export default mongoose.model("Drive", driveSchema);