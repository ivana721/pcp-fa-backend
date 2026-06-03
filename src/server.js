import dns from "node:dns";
import dotenv from "dotenv";
import mongoose from "mongoose";
import axios from "axios";
import app from "./app.js";
import AssessmentDataset from "./modules/assessment/models/assessmentData.model.js";

dns.setServers(["1.1.1.1", "8.8.8.8"]);

dotenv.config();

const BASE_URL = "https://t4e-testserver.onrender.com/api";
const PORT = process.env.PORT || 5000;
const MONGODB_URI = "mongodb+srv://ivana:Vengeance72@cluster0.aomhwlb.mongodb.net/?appName=Cluster0";

let dataSet;
const loadData = async () => {
  try {
    // PUBLIC CALL - send request body
    const response = await axios.post(`${BASE_URL}/public/token`, {
      studentId: "E0323021",
      password: "475787",
      set: "setA",
    });

    const { token, dataUrl } = response.data;

    // PRIVATE CALL - send JWT token in headers
    const response2 = await axios.get(`${BASE_URL}${dataUrl}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

      // normalize to orders array like frontend expects
      const orders = Array.isArray(response2.data?.data?.orders)
        ? response2.data.data.orders
        : Array.isArray(response2.data?.orders)
        ? response2.data.orders
        : [];

      dataSet = response2.data;
      console.log(Object.keys(dataSet));

      console.log("Fetched dataset:");
      console.log("Raw response payload:");
      console.log(JSON.stringify(response2.data, null, 2));
      console.log(`Normalized orders count: ${orders.length}`);
      console.log(JSON.stringify(dataSet, null, 2));

      // persist fetched dataset to MongoDB (upsert by dataUrl)
      try {
        await AssessmentDataset.findOneAndUpdate(
          { dataUrl },
          { token, dataUrl, payload: response2.data, syncedAt: new Date() },
          { upsert: true, new: true, returnDocument: 'after' }
        );
        console.log('Assessment dataset saved to MongoDB.');
      } catch (saveErr) {
        console.error('Failed to save assessment dataset:', saveErr);
      }

    // start server after successful API calls
    app.listen(PORT, () => {
      console.log(`Server is running @${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB Atlas successfully.');
    loadData(); // Call loadData after successful MongoDB connection
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB Atlas:', err);
    process.exit(1);
  });