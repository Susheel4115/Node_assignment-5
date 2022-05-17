const Post = require("../models/Post");

const createUser = async (req, res) => {
  try {
    const { title, body, image } = req.body;
    const newUser = {
      title: title,
      body: body,
      image: image,
      user: req.user.email,
    };
    const createdUser = await Post.create(newPost);
    res.send(200).json({ status: "User created", data: createdUser });
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = createUser;
