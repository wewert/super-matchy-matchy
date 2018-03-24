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

//plan is to pass value game level from gameboard/summary/toleaderboard until then hard coded 'E'.  
router.get("/players/:game_level", function (req, res) {
  db.player.findAll({
    where: {
      game_level: 'E'
    },
    order: [
      ['points', 'DESC']
    ]

  }).then(function (data) {
    // console.log(data);
    res.json(data);
  });
});

module.exports = router;