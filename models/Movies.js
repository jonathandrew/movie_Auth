const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: { type: String, unique: true, trim: true },
  rating: { type: String },
  synopsis: { type: String, trim: true },
  release_year: { type: String },
  genre: { type: String },
  director: { type: String },
  box_office: { type: String }
});

module.exports = mongoose.model("Movies", movieSchema);
