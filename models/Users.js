const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, trim: true, lowercase: true },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true
  },
  password: { type: String, default: "", trim: true }
});

module.exports = mongoose.model("Users", UserSchema);
