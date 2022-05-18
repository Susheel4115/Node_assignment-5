const Post = require("../models/Post");
const authMiddleware = require("../middleware/auth");
const createUser = async (req, res) => {
  try {
    const { title, body, image } = req.body;
    const newUser = {
      title: title,
      body: body,
      image: image,
      user: req.user,
    };

    const createdUser = await Post.create(newUser);
    console.log(req.user);
    console.log("new user =", newUser);
    console.log("created user = ", createdUser);
    res.status(200).json({ status: "User created", data: createdUser });
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = createUser;
