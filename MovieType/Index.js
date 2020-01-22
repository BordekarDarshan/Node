let express = require("express");
let mongoose = require("mongoose");
let App = express();
let port = 4000;
App.use(express.json());

App.listen(port, () => {
  console.log("Connected To Port");
});

mongoose
  .connect("mongodb://localhost/Movies", {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => {
    console.log("Connected");
  })
  .catch(error => {
    "Something Went Wrong", error.message;
  });

let GenreUse = require("./Route/Genre");
let MovieUse = require("./Route/Movies");

App.use("/Api", GenreUse);
App.use("/Api", MovieUse);
