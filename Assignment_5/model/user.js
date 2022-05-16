const mongoose = require("mongoose");

const DatabaseSchema = new mongoose.Schema({
  status: "",
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
    match: /.+\@.+\..+/,
    unique: true,
  },
  password: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("UserData", DatabaseSchema);
