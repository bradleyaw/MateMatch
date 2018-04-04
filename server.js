var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 1111;


// API Routes
require("./app/routing/apiRoutes.js")(app);

// Web Routes
require("./app/routing/htmlRoutes.js")(app);

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
/*
// Route setup
///////////////////////////////////////////////////////////////
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
});

app.get("/api/friends?", function (req, res) {
    res.json(friends);
});

app.post("/api/friends", function (req, res) {
    var newfriend = req.body;
    console.log(newfriend);
    friends.push(newfriend);
    res.json(newfriend);
});
*/
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});