const User = require("../models/User");

const resgisterUser = async (req, res) => {
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
};

module.exports = resgisterUser;
