var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var player = require("../models/game.js");
var image = require("../models/image.js");
var Card = require("../models/cards.js");

let db = require("../models");

// GET
router.get("/", function (req, res) {
  db.Card.findAll().then(
    function (data) {
      var hbsObject = {
        card_value: data
      };
  res.render("index", hbsObject);
  });
});

module.exports = router;
