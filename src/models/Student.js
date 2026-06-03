import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  studentId: {
    type: String,
    required: true,
    unique: true,
  },
  name: String,
  email: String,
  department: String,
  cgpa: Number,
  skills: [String],
  graduationYear: Number,
  phone: String,
  status: String,
});

export default mongoose.model("Student", studentSchema);