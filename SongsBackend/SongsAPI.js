const Express = require("express");
const joi = require("@hapi/joi");
const App = Express();
let Port = process.env.NODE_ENV || 4800;
App.use(Express.json());
App.listen(
  Port,
  setTimeout(() => {
    console.log("Server is Working");
  }, 2000)
);

let Songs = [{ id: 1, name: "WayUp" }];

//[GET]
App.get("/Api/GetSongs", (req, res) => {
  res.send(Songs);
});

//Add Data [POST].
App.post("/Api/AddSong", (req, res) => {
  let { error } = validation(req.body);
  if (error) {
    return res.send(error.details[0].message);
  }
  let newSong = {
    id: Songs.length + 1,
    name: req.body.name
  };

  Songs.push(newSong);
  res.send(Songs);
});

//[UPDATE]
App.put("/Api/Update/:id", (req, res) => {
  let findSong = Songs.find(song => song.id === parseInt(req.params.id));
  if (!findSong) {
    return res.status(404).send({ message: "Invalid Course id" });
  }
  let { error } = validation(req.body);
  console.log(error);

  if (error) {
    return res.send(error.details[0].message);
  }
  findSong.name = req.body.name;
  res.send({ Message: "Updated Successfully", Data: Songs });
});

//[DELETE]
App.delete("/Api/delete/:id", (req, res) => {
  let FetchId = Songs.find(song => song.id == req.params.id);
  console.log(FetchId);

  if (FetchId) {
    res.status(404).send({ Data: "Data Not Found" });
  }
  let index = Songs.indexOf(FetchId);
  Songs.splice(index, 1);
  res.send({ Data: "Deleted" });
});

function validation(reqBody) {
  let Schema = joi.object({
    name: joi.string().min(2).max(15).required()
  });
  return Schema.validate(reqBody);
}
