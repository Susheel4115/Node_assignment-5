const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).send("No token provided");
    return;
  }
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { email } = decoded;
    req.user = { email };
    next();
  } catch (error) {
    res.send({ message: error.message });
  }
};

module.exports = authMiddleware;
