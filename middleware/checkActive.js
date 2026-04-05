// middleware/checkActive.js
const checkActive = (req, res, next) => {
  if (req.user && req.user.status === "inactive") {
    return res.status(403).json({ msg: "User is inactive" });
  }
  next();
};

module.exports = checkActive;   // ✅ IMPORTANT