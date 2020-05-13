// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

// Send the user to the home page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index (2).html"));
  });

};
