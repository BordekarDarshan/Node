let express = require("express");
let router = express.Router();
let Joi = require("@hapi/joi");
let user = require("../Database/User");
let movie = require("../Database/Movie");
let usermovie = require("../Database/UserMovie");

router.post("/usermovie", async (req, res) => {
  let { error } = usermovieValidation(req.body);
  if (error) {
    return res.send(error.details[0].message);
  }
  let userData = await user.userModel.findById(req.body.userId);
  if (!userData) {
    res.send({ error: "Id Doesn't Exist" });
  }

  let movieData = await movie.moviemodel.findById(req.body.movieId);
  if (!movieData) {
    res.send({ error: "Id Doesn't Exist" });
  }

  let addData = new usermovie.usermovieModel({
    userId: {
      firstname: userData.firstname,
      lastname: userData.lastname,
      emailid: userData.emailid
    },
    movieId: {
      name: movieData.name,
      actor: movieData.actor,
      price: movieData.price,
      moviestock: movieData.moviestock
    }
  });
  let saveData = await addData.save();
  res.send({ Data: saveData });
});

function usermovieValidation(reqbody) {
  let schema = Joi.object({
    userId: Joi.string().required(),
    movieId: Joi.string().required()
  });
  return schema.validate(reqbody);
}

module.exports = router;
