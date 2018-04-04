//Connects route to data source
var path = require("path");
var friendsData = require("../data/friends.js");

// Exports

module.exports = function(app) {

    app.get("/api/friends?", function (req, res) {
        res.json(friendsData);
    });
    
    app.post("/api/friends", function (req, res) {
        var newfriend = req.body;
        friendsData.push(newfriend);

        res.json(newfriend);
    });
};
