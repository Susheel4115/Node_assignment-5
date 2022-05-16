const express = require("express");
const { Model } = require("mongoose");
const router = express.Router();
const User = require("../model/user");

//register the user

router.post("/register", async (req, res) => {
  const user = [];
  const data = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const dataToSave = await data.save();
    user.push(dataToSave);
    res.status(200).json({
      status: "Sucess",
      user: {
        user,
      },
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//post for login user is legit or not

router.post("/login", async (req, res) => {
  User.find({ email: req.body.email }, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log("Result : ", docs);

      const [{ email }] = docs;
      const [{ password }] = docs;
      if (email === req.body.email && password === req.body.password) {
        res.status(200).json({
          status: "Success",
        });
      } else {
        res.status(401).json({ message: "User is nou authenticated" });
      }
    }
  });
});

module.exports = router;
