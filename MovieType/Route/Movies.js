let Express = require("express");
let router = Express.Router();
let GenreModel = require("../Database/DatabaseGenre");

router.post("/addMovie", async (req, res) => {
  let newMovie = new GenreModel.MovieModel({
    name: req.body.name,
    actor: req.body.actor,
    price: req.body.price,
    genre: req.body.genre
  });

  let saveData = await newMovie.save();
  res.send({ Data: saveData });
});

module.exports = router;
