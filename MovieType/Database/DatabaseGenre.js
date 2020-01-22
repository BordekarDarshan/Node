let mongoose = require("mongoose");

let GenreSchema = new mongoose.Schema({
  Genre: { type: String, required: true }
});

let GenreModel = mongoose.model("Genre", GenreSchema);

module.exports = GenreModel;
