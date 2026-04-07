const mongoose = require("mongoose");

// load from process.env directly; dotenv should be configured in server.js
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/MyLeenDB";

// creates connection between Backend and Database
async function connectDB() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB Error:", error);
    process.exit(1);
  }
}

module.exports = connectDB;
