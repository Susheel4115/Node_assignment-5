const Post = require("../models/Post");

const deletedUser = async (req, res) => {
  const { email } = req.user;
  const { id } = req.params;
  try {
    const userTobeDeleted = await Post.find({ _id: id });
    if (userTobeDeleted.length === 0) {
      res.status(404).send("User not found");
      return;
    }
    if (userTobeDeleted[0].user === email) {
      await Post.findByIdAndDelete({ _id: id, user: email });
      res.json({ status: "User deleted" });
    } else {
      res.send(403).send("user is not authorrised to delete this data");
    }
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = deletedUser;
