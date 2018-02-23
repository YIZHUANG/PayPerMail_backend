const mongoose = require("mongoose");
const { Schema } = mongoose;
const recipientSchema = require("./recipient");

const EmailSchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [recipientSchema], //sub-collection
  like: { type: Number, default: 0 }, //like or dislike
  dislike: { type: Number, default: 0 },
  _user: { type: Schema.Types.ObjectId, ref: "user" }, //set up relationshit between this and user collection.
  creationDate: Date,
  lastResponded: Date
});

mongoose.model("email", EmailSchema);
