let express = require("express");
let router = express.Router();
let GenreModel = require("../Database/DatabaseGenre");

router.get("/getGenre", async (req, res) => {
  let Data = await GenreModel.find();

  res.send({ Data: Data });
});

router.post("/addGenre", async (req, res) => {
  let newGenre = new GenreModel.GenreModel({
    Genre: req.body.Genre
  });
  let SaveData = await newGenre.save();
  res.send({ Response: "Genre Added", Data: SaveData });
});

module.exports = router;
