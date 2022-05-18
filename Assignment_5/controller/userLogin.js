const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

const passwordValidation = (passwordEnteredByUser, hash, res, email, id) => {
  console.log(hash);
  bcrypt.compare(passwordEnteredByUser, hash, function (error, isMatch) {
    console.log(passwordEnteredByUser, hash, isMatch);
    if (error) {
      res.status(404).send(error);
    } else if (!isMatch) {
      res.status(401).send("password mismatch");
    } else {
      console.log("In else part");
      // const id = new Date().getDate();
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
    console.log(req.body);
    const findQueryinDB = await User.findOne({ email: email });
    console.log(findQueryinDB.id);
    if (findQueryinDB) {
      passwordValidation(
        password,
        findQueryinDB.password,
        res,
        email,
        findQueryinDB.id
      );
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    res.send(error);
  }
};

module.exports = userLogin;
