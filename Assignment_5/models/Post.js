const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");

//schema for post

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

//encrypting the user
// PostSchema.pre("save", function (next) {
//   const user = this;

//   if (this.isModified("user") || this.isNew) {
//     bcrypt.genSalt(10, function (saltError, salt) {
//       if (saltError) {
//         return next(saltError);
//       } else {
//         bcrypt.hash(user.user, salt, function (hashError, hash) {
//           if (hashError) {
//             return next(hashError);
//           }

//           user.user = hash;
//           next();
//         });
//       }
//     });
//   } else {
//     return next();
//   }
// });
module.exports = mongoose.model("PostData", PostSchema);
