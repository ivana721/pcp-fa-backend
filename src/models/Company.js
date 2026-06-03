import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
  companyId: {
    type: String,
    required: true,
    unique: true,
  },
  name: String,
  role: String,
  package: Number,
  eligibleDepartments: [String],
  minimumCgpa: Number,
  driveDate: Date,
  status: String,
});

export default mongoose.model("Company", companySchema);