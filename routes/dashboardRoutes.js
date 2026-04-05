const express = require("express");
const router = express.Router();

const { getSummary } = require("../controllers/dashboardController");
const authorize = require("../middleware/authMiddleware");

router.get(
  "/summary",
  authorize(["admin", "analyst"]),
  getSummary
);

module.exports = router;