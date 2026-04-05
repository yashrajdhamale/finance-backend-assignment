const authorize = (roles) => {
  return (req, res, next) => {
    // assume req.user is already set (via auth middleware / dummy for now)
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({ msg: "Access Denied" });
    }
    next();
  };
};

module.exports = authorize;