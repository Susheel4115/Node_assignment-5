const User = require("../models/User");

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find({});
    res.status(200).json({ status: "success", data: allUsers });
  } catch (error) {
    res.send(error);
  }
};

module.exports = getAllUsers;
