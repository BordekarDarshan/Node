let mongoose = require("mongoose");
let genreModel = require("./DatabaseGenre");

let MovieSchema = new mongoose.Schema({
  name: { type: String, required: true },
  actor: { type: String, required: true },
  price: { type: Number, required: true },
  genre: { type: mongoose.Schema.Types.ObjectId, ref: genreModel }
});

let MovieModel = mongoose.model("Movie", MovieSchema);

module.exports = MovieModel;
