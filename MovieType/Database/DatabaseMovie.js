let mongoose = require("mongoose");
let joi = require("@hapi/joi");
let databaseGenre = require("./DatabaseGenre");
let MovieSchema = new mongoose.Schema({
  name: { type: String, required: true },
  actor: { type: String, required: true },
  price: { type: Number, required: true },
  genre: { type: databaseGenre.GenreSchema }
});

let MovieModel = mongoose.model("Movie", MovieSchema);

function validation(reqBody) {
  let Schema = joi.object({
    name: joi.string().min(2).max(15).required(),
    actor: joi.string().min(2).max(15).required(),
    price: joi.number().min(2).max(15).required(),
    genreId: joi.string().required()
  });
  return Schema.validate(reqBody);
}

module.exports = { MovieModel, validation };
