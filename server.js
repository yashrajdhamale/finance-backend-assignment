const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();

const userRoutes = require("./routes/userRoutes");
const recordRoutes = require("./routes/recordRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

const mockUser = require("./middleware/mockUser");
const checkActive = require("./middleware/checkActive");

const app = express();

connectDB();

app.use(express.json());

app.use(checkActive);

// TEMP user injection
app.use(mockUser);

// ROUTES
app.use("/users", userRoutes);
app.use("/records", recordRoutes);
app.use("/dashboard", dashboardRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});