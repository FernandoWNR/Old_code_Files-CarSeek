const jwt = require("jsonwebtoken");

function checkAuth(req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    console.log(req.headers.authorization.split(" "));
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userData = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Authentication failed!..Invalid or Expired Token.",
      error: error,
    });
  }
}

module.exports = { checkAuth: checkAuth };
