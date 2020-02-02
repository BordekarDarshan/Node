let mongoose = require("mongoose");
let user = require("./User");
let movie = require("./Movie");

let usermovieSchema = new mongoose.Schema({
  userId: { type: user.userSchema, required: true },
  movieId: { type: movie.movieSchema, required: true }
});

let usermovieModel = mongoose.model("usermovieData", usermovieSchema);

module.exports = { usermovieModel, usermovieSchema };
