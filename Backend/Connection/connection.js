const mongoose = require("mongoose");

const MONGODB_URI = //your MongoDB connection string here;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI); // No need for deprecated options
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
