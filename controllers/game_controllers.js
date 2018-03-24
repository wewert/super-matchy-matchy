var express = require("express");
var router = express.Router();
var path = require("path");
var db = require("../models");

router.get("/summary", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/summary.html"))
});

router.get("/leaderboard", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/leaderboard.html"))
});

router.get("/players", function (req, res) {
  db.player.findAll()
    .then(function (data) {
      // console.log(data);
      res.json(data);
    });
});

module.exports = router;