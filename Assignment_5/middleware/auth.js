const jwt = require("jsonwebtoken");
require("dotenv").config();
const authMiddleware = async (req, res, next) => {
  const authHeader = req.header("authToken");
  console.log("token is ", authHeader);
  console.log(process.env.JWT_SECRET);
  // if (!authHeader || !authHeader.startsWith("Bearer ")) {
  //   res.status(401).send("No token provided");
  //   return;
  // }
  if (!authHeader) {
    res.status(401).send("No token provided");
    return;
  }
  // const token = authHeader.split(" ")[0];
  const token = authHeader;

  try {
    console.log("in the try block for token gen");

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    // const { email } = decoded;
    req.user = decoded.id;
    console.log("request user-", req.user);

    next();
  } catch (error) {
    res.send({ message: error.message, status: "susheel" });
  }
};

module.exports = authMiddleware;
