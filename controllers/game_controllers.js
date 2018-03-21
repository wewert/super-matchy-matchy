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


module.exports = router;