const mongoose = require("mongoose");
const { Schema } = mongoose;

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
  user: {
    type: Schema.Types.ObjectId,
    ref: "DatabaseSchema",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("PostData", PostSchema);
