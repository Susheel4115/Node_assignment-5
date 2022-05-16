const mongoose = require("mongoose");
const user = require("./user");
const PostSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  body: {
    required: true,
    type: String,
  },
  image: {
    required: true,
    type: String,
  },
  user: user,
});

module.exports = mongoose.model("PostData", PostSchema);
