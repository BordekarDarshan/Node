let mongoose = require("mongoose");

let GenreSchema = new mongoose.Schema({
  Genre: { type: String, required: true }
});

let MovieSchema = new mongoose.Schema({
  name: { type: String, required: true },
  actor: { type: String, required: true },
  price: { type: Number, required: true },
  genre: { type: mongoose.Schema.Types.ObjectId, ref: "Genre" }
});

let MovieModel = mongoose.model("Movie", MovieSchema);

let GenreModel = mongoose.model("Genre", GenreSchema);

module.exports = { GenreModel, MovieModel };
