var express = require("express");
var router = express.Router();

var db = require("../models");
sequelize = db.sequelize,
  Sequelize = db.Sequelize;

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
  db.player.create(req.body).then(function(dbPlayer) {
    res.json(dbPlayer);
  });
});


module.exports = router;
