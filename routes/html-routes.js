// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

module.exports = function(app) {

// Send the user to the home page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

};
