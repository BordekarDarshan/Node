let mongoose = require("mongoose");

let GenreSchema = new mongoose.Schema({
  Genre: { type: String, required: true }
});

let GenreModel = mongoose.model("Genre", GenreSchema);

function validation(reqBody) {
  let Schema = joi.object({
    Genre: joi.string().min(2).max(15).required()
  });
  return Schema.validate(reqBody);
}

module.exports = { GenreModel, GenreSchema, validation };
