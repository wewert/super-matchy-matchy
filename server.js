var express = require("express");
var bodyParser = require("body-parser");
var db = require("./models");


var port = process.env.PORT || 8000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/game_controllers.js");
require("./controllers/html-routes.js");
app.use("/", routes);
//if {force:true} 
db.sequelize.sync().then(function () {
    app.listen(port);
});