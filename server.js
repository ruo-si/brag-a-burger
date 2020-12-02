// instal dependencies 
const express = require("express");
const mysql = require("mysql");
const connection = require("./config/connection")
const exphbs = require("express-handlebars");

// create instance of express app.
const app = express();

// establish port
const PORT = process.env.PORT || 8080;

// initiate MySQL Connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// set handlebars as default templating engine
app.engine("handlebars", exphbs({ defaultlayout: "main" }));
app.set("view engine", "handlebars");

// express middleware
app.use(express.static("public"))

// mock data

const burgers = [
  {
    burger: "double bacon delux burger"
  }, {
    burger: "veggie brie double avocado burger"
  }
]


// routes
// home
app.get("/", function (req, res) {
  res.send("setup");
  // res.render()

});

// on the grill
app.get("/grill", function (req, res) {
  res.send("on the grill");
  // res.render("index", burgers[0])
});

// in my tummy
app.get("/belly", function (req, res) {
  res.send("in my belly");
  // res.render("index", burgers[0])
});


// seed tables

// listening on PORT
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});