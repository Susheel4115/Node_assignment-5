const Post = require("../models/Post");

const deletedUser = async (req, res) => {
  console.log("Sushi");
  // const { email } = req.user;
  const postID = req.params.id;

  console.log(postID);

  console.log(req.user);

  console.log("req prams- ", req.params.id);
  const userTobeDeleted = await Post.findById(postID);
  console.log("this is user deleted", userTobeDeleted);
  try {
    // console.log(id + " id is");
    // console.log(email);

    // console.log("deleted- ", userTobeDeleted.email);
    console.log(userTobeDeleted.user);

    if (userTobeDeleted.length === 0) {
      res.status(404).send("User not found");
      return;
    }
    if (userTobeDeleted.user.toString() === req.user) {
      await Post.findByIdAndDelete(postID);
      res.json({ status: "User deleted" });
    } else {
      res.status(403).send("user is not authorised to delete this data");
    }
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = deletedUser;
