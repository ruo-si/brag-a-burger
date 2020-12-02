// instal dependencies 
const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./controller");

// create instance of express app.
const app = express();

// establish port
const PORT = process.env.PORT || 8080;

// middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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

// routes
app.use(routes);

// listening on PORT
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});