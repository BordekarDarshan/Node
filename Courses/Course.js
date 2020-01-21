const express = require("express");
const mongoose = require("mongoose");
const App = express();
App.use(express.json());
const port = 4000;
App.listen(port, () => {
  console.log("Server Working Fine...");
});

//Connection.

mongoose
  .connect("mongodb://localhost/Course", {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => {
    console.log("Connected");
  })
  .catch(error => {
    "Something Went Wrong", error.message;
  });

//Schema.

let CourseSchema = new mongoose.Schema({
  tags: [String],
  date: { type: Date },
  name: { type: String, required: true },
  author: { type: String },
  isPublished: { type: Boolean },
  price: { type: Number }
});

//Model.

let CourseModel = mongoose.model("CourseList", CourseSchema, "CourseList");

//[1]

async function GetAllBackendCourse() {
  let result = await CourseModel.find({
    tags: { $in: ["backend"] }
  });
  console.log(result);
}
GetAllBackendCourse();

//[2]

async function SortByName() {
  let result = await CourseModel.find().sort("name");
  console.log(result);
}

SortByName();

//[3]

async function ChoiceSelect() {
  let result = await CourseModel.find().select("name author -_id").sort("name");
  console.log(result);
}

ChoiceSelect();

//[4]

async function lastOne() {
  let result = await CourseModel.find({
    tags: { $in: ["backend", "frontend"] }
  })
    .sort("-price")
    .select("name author");
  console.log(result);
}
lastOne();
