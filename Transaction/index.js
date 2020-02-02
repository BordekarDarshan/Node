let express = require("express");
let mongoose = require("mongoose");

let App = express();
let port = 4000;

App.use(express.json());
App.listen(port, () => {
  console.log("Connected To Port");
});

mongoose
  .connect("mongodb://localhost/transactionMovie", {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => {
    console.log("Connected To Database");
  })
  .catch(() => {
    console.log("Error");
  });

let movieRoute = require("./Routes/MovieRoutes");
let userMovieRoute = require("./Routes/UserMovieRoutes");
let UserRoutes = require("./Routes/UserRoutes");

App.use("/api", movieRoute);
App.use("/api", userMovieRoute);
App.use("/api", UserRoutes);
