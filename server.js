var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 1111;

// Sets up the Express app to handle data parsing(body-parser npm)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// API Routes
require("./app/routing/apiRoutes.js")(app);

// HTML Routes
require("./app/routing/htmlRoutes.js")(app);


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});