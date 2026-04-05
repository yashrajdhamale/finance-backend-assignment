require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const userRoutes = require("./routes/userRoutes");
const recordRoutes = require("./routes/recordRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

const mockUser = require("./middleware/mockUser");
const checkActive = require("./middleware/checkActive");

const app = express();

app.use(express.json());

// middleware order ✅
app.use(mockUser);
app.use(checkActive);

// routes
app.use("/users", userRoutes);
app.use("/records", recordRoutes);
app.use("/dashboard", dashboardRoutes);

// connect DB then start server ✅
connectDB()
  .then(() => {
    console.log("DB Connected ✅");

    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("DB connection failed ❌", err);
    process.exit(1); // stop app if DB fails
  });
