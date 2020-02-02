let express = require("express");
let Joi = require("@hapi/joi");
let user = require("../Database/User");

let router = express.Router();

router.post("/user", async (req, res) => {
  let { error } = userValidation(req.body);
  if (error) {
    return res.send(error.details[0].message);
  }
  let addData = new user.userModel({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    emailid: req.body.emailid
  });

  let saveData = await addData.save();

  res.send({ Data: saveData });
});

function userValidation(reqBody) {
  let Schema = Joi.object({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    emailid: Joi.string().required()
  });
  return Schema.validate(reqBody);
}

module.exports = router;
