var db = require("../models");

module.exports = function(app) {
// Show players with top 10 scores
  app.get("/api/players", function(req, res) {
    db.Player.findAll({
       where: {
         order: 'points DESC',
         offset: 10,
    }).then(function(dbPlayer) {
      res.json(dbPlayer.player_name);
      res.json(dbPlayer.points);
    });
  });

  app.post("/api/players", function(req, res) {
// Insert player to a player DB
    db.Player.create(req.body).then(function(dbPlayer) {
      res.json(dbPlayer);
    });
  });

};
