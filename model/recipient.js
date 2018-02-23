const mongoose = require("mongoose");
const { Schema } = mongoose;

const recipientSchema = new Schema({
  email: String,
  responded: { type: Boolean, default: false },
  like: { type: Boolean, default: false }, //like or dislike
  dislike: { type: Boolean, default: false }
});

module.exports = recipientSchema;
