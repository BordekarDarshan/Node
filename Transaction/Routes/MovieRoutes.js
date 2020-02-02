let express = require("express");
let router = express.Router();
let Joi = require("@hapi/joi");
let movie = require("../Database/Movie");

router.post("/movie", async (req, res) => {
  let { error } = movieValidation(req.body);
  if (error) {
    res.send(error.details[0].message);
  }
  let addData = new movie.moviemodel({
    name: req.body.name,
    actor: req.body.actor,
    price: req.body.price,
    moviestock: req.body.moviestock
  });
  let saveData = await addData.save();
  res.send({ Data: saveData });
});

function movieValidation(reqBody) {
  let schema = Joi.object({
    name: Joi.string().required(),
    actor: Joi.string().required(),
    price: Joi.number().required(),
    moviestock: Joi.number().required()
  });
  return schema.validate(reqBody);
}

module.exports = router;
