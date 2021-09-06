const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  userId: Schema.Types.ObjectId,
  Firstname: {
    type: String,
    required: true,
  },
  Lastname: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  FamilySituation: {
    type: String,
    required: true,
    enum: ["single", "married", "divorced"],
  },
  email: {
    type: String,
    required: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  password: {
    type: String,
    required: true,
  },
  tel: {
    type: Number,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ["employee", "manager", "admin"],
  },
  joinDate: Date,
});

const User = mongoose.model("user", userSchema);
module.exports = User;
