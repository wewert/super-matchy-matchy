var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var player = require("../models/game.js");
var image = require("../models/image.js");




module.exports = router;