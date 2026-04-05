const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
    return conn; // ✅ important
  } catch (error) {
    console.error("DB Connection Error:", error);
    throw error; // ❗ don't use process.exit here
  }
};

module.exports = connectDB;