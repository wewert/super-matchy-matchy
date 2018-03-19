var express = require("express");
var bodyParser = require("body-parser");
var models = require("./models");

var port = process.env.PORT || 8000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

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
var routes = require("./controllers/gameControllers.js");

app.use("/", routes);
//if {force:true} 
models.sequelize.sync().then(function () {
    app.listen(port);
});