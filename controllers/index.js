var express = require("express");
var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../model/burgers.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {

  burger.all(function (data) {
    var burgerDisplayObj = {
      burgers: data
    };

    res.render("index", burgerDisplayObj);
  });
});

// create new burger
router.post("/api/burgers", function (req, res) {

  // orm create
  burger.create(["name", "yummy"], [req.body.name, req.body.yummy],

    // cb
    function (result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  burger.update({ yummy: req.body.yummy }, condition,

    // cb
    function (result) {
      if (result.changedRows == 0) {

        // err handling
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
});

router.delete("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition,

    // cb
    function (result) {
      if (result.affectedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
});

// Export routes for server.js to use.
module.exports = router;
