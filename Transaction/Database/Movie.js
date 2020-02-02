let mongoose = require("mongoose");

let movieSchema = new mongoose.Schema({
  name: { type: String, required: true },
  actor: { type: String, required: true },
  price: { type: Number, required: true },
  moviestock: { type: Number, required: true }
});

let moviemodel = mongoose.model("movieData", movieSchema);

module.exports = { movieSchema, moviemodel };
