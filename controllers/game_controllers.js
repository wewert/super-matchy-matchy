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

//insert new row
router.post("/api/players", function (req, res) {
  db.player.create(req.body).then(function (dbPlayer) {
    res.json(dbPlayer);
  });
});

//pull data from the database according to diff level
router.get("/api/difficulties/difficulty/:difficulty", function (req, res) {
  db.player.findAll({
      where: {
        game_level: req.params.difficulty
      },
      order: [
        ['points', 'DESC'],
      ],
      limit: 10
      // order: [sequelize.fn('max', sequelize.col('points'))]
    })
    .then(function (dbPlayer) {
      res.json(dbPlayer);
    });
});

module.exports = router;