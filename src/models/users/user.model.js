const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
  {
    _id: String,
    id: Number,
    first_name: String,
    last_name: String,
    email: String,
    gender: String,
    avatar: String,
    domail: String,
    available: Boolean,
  },
  {
    timestamps: true,
  }
);

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;
