const Post = require("../models/Post");

const editUser = async (req, res) => {
  const { email } = req.user;
  const { id } = req.params;
  const update = req.body;
  try {
    const allUsersWithGivenId = await Post.findOneAndUpdate(
      {
        _id: id,
        user: email,
      },
      update
    );
    const updatedUser = await Post.find({ _id: id, user: email });
    if (updatedUser.length > 0) {
      res.send({ status: "success" });
    } else {
      res.status(403).send("You're not allowed to edit");
    }
  } catch (error) {
    res.send(404).send(error.message);
  }
};

module.exports = editUser;
