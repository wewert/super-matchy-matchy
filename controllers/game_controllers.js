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
  console.log("here");
  db.player.findAll()
    .then(function (data) {
      console.log(data);
      res.json(data);
    });
});

router.post("/api/players", function (req, res) {
  // Insert player to a player DB
  db.Player.create(req.body).then(function (dbPlayer) {
    res.json(dbPlayer);
  });
});

module.exports = router;