var db = require("../models");

module.exports = function(app) {
// Display random images
// Not sure how to take number of pictures based on difficulty level
  app.get("/api/images", function(req, res) {
    db.Image.findAll({
      order: 'random()',
      limit: 8
    }).then(function(dbImage) {
        res.json(dbImage.image_name);
    });
  });

};
