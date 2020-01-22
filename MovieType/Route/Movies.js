let Express = require("express");
let router = Express.Router();
let movieModel = require("../Database/DatabaseMovie");
let genremodel = require("../Database/DatabaseGenre");

router.post("/addMovie", async (req, res) => {
  let { error } = movieModel.validation(req.body);
  if (error) {
    return res.send(error.details[0].message);
  }
  let genre = await genremodel.GenreModel.findById(req.body.genreId);
  let newMovie = new movieModel.MovieModel({
    name: req.body.name,
    actor: req.body.actor,
    price: req.body.price,
    genre: {
      _id: genre._id,
      Genre: genre.Genre
    }
  });

  let saveData = await newMovie.save();
  res.send({ Data: saveData });
});

module.exports = router;
