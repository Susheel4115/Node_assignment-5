const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
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
    lowercase: true,
    unique: true,
  },
  password: {
    required: true,
    type: String,
  },
});

DatabaseSchema.pre("save", function (next) {
  const user = this;

  if (this.isModified("password") || this.isNew) {
    bcrypt.genSalt(10, function (saltError, salt) {
      if (saltError) {
        return next(saltError);
      } else {
        bcrypt.hash(user.password, salt, function (hashError, hash) {
          if (hashError) {
            return next(hashError);
          }

          user.password = hash;
          next();
        });
      }
    });
  } else {
    return next();
  }
});

module.exports = mongoose.model("UserData", DatabaseSchema);
