// instal dependencies 
const express = require("express");
const mysql = require("mysql");
const connection = require("./config/connection")

// Create instance of express app.
const app = express();

// establish port
const PORT = process.env.PORT || 8080;

// Initiate MySQL Connection.
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

// middleware


// routes
app.get("/", function(req, res) {
    res.send("setup");
  });
  

// seed tables

// listening on PORT
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });