// dependencies
const express = require("express");
const router = express.Router();

// burgers orm for controller
const burgers = require("../model/burgers");


// home index
router.get("/", function (req, res) {
    res.render("index");
});

// on the grill
// router.post("/api/burgers", function (req, res) {
//     res.send("in my belly");

// });

// on the grill
// router.create("/api/burgers", function (req, res) {
//     res.send("on the grill");

// });

// update user defined
// router.put("/api/burgers/:id", function (req, res) {
//     res.send("update");

// });

// delete user defined 
// router.delete("/api/burgers/:id", function (req, res) {
//     res.send("delete");

// });

module.exports = router;