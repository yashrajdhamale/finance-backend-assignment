const User = require("../models/User");

const mockUser = async (req, res, next) => {
  try {
    const userId = "69d1efa9c3782a8331f4ed2f"; // test user id

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    // Attach REAL user from DB
    req.user = {
      id: user._id,
      role: user.role,
    };

    next();
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

module.exports = mockUser;