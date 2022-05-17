const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

const passwordValidation = (passwordEnteredByUSer, hash, res, email) => {
  bcrypt.compare(passwordEnteredByUSer, hash, function (error, isMatch) {
    if (error) {
      res.status(404).send(error);
    } else if (!isMatch) {
      res.status(401).send("password mismatch");
    } else {
      const id = new Date().getDate();
      const token = jwt.sign({ id, email }, process.env.JWT_SECRET, {
        expiresIn: "30d",
      });
      res.status(200).json({
        status: "Success",
        token: token,
      });
    }
  });
};
const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const findQueryinDB = await User.findOne({ email: email });
    if (findQueryinDB) {
      passwordValidation(password, findQueryinDB.password, res, email);
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    res.send(error);
  }
};

module.exports = userLogin;
