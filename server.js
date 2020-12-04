// dependencies
var express = require("express");
var exphbs = require("express-handlebars");
var routes = require("./controllers");

// PORT and server setup
var PORT = process.env.PORT || 8080;
var app = express();

// middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// handlebars setup
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// routing
app.use(routes);

// start server listen on PORT
app.listen(PORT, function() {

  console.log("Server listening on: http://localhost:" + PORT);
  
});
