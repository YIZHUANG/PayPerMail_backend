const mongoose = require("mongoose");
const { Schema } = mongoose;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
  local: {
    username: String,
    password: String
  },
  google: {
    googleId: String,
    name: String,
    email: String
  },
  credits: {
    type: Number,
    default: 0
  }
});

userSchema.plugin(passportLocalMongoose);

mongoose.model("user", userSchema);
