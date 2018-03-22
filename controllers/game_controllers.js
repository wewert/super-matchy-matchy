var express = require("express");
var router = express.Router();

var db = require("../models");

router.get("/", function (req, res) {
  db.player.findAll()
    .then(function (data) {
      console.log(data);
      var hbsObject = {
        player: data
      };
      return res.render("index", hbsObject);
    });
});

router.post("/api/players", function(req, res) {
// Insert player to a player DB
  db.Player.create(req.body).then(function(dbPlayer) {
    res.json(dbPlayer);
  });
});

module.exports = router;
