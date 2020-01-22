let Express = require("express");
let router = Express.Router();
let movieModel = require("../Database/DatabseMovies");

router.post("/addMovie", (req, res) => {
  let newMovie = new movieModel({
    name: req.body.name,
    actor: req.body.actor,
    price: req.body.price,
    genre: req.body.genre
  });
  let saveData = newMovie.save();
  res.send({ Data: saveData });
});

module.exports = router;
