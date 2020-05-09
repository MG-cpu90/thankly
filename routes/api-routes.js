// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");
var Sequelize = require("sequelize");

module.exports = function (app) {
  // POST route for logging-in a user.
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

  // POST route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function (req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function () {
        res.redirect(307, "/api/login");
      })
      .catch(function (err) {
        res.status(401).json(err);
      });
  });

  // GET route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  // GET route for getting some data about our user to be used client side
  app.get("/api/user_data", function (req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  // GET route for getting a random prompt order: Sequelize.literal('rand()'), 
  app.get("/api/prompt", function (req, res) {
    db.Prompts.findAll({ order: Sequelize.literal('rand()'), limit: 1 }).then((randThank) => {
      res.json(randThank);
    });
  });

  // GET route for getting a specific prompt
  app.get("/api/prompt/:id", function (req, res) {
    db.Prompts.findOne({ where: { id: req.params.id } }).then((idThank) => {
      res.json(idThank);
    })
  });

  // POST route for posting a new thank
  app.post("/api/new/:id", function (req, res) {
    console.log("Thank Author, Body, Creation Time: ");

    db.Thank.create({
      prompt: req.params.id,
      author: req.body.author,
      body: req.body.body,
    }).then(function (results) {
      // `results` here would be the newly created thank
      res.end();
    });

    // // Prompt
    // db.Prompts.findOne({ where: { id: req.params.id }}).then((idThank) => {
    //   console.log(idThank);
    //   res.json(idThank);
    // })
  });

  // GET route for getting all thanks 
  app.get("/api/all", function (req, res) {
    db.Thank.findAll({}).then((allThanks) => {
      res.json(allThanks);
    });
  });

  // GET route for getting a specific thank
  app.get("/api/thank/:id", function (req, res) {
    db.Thank.findOne({ where: { id: req.params.id } }).then((idThank) => {
      res.json(idThank);
    })
  });

  // DELETE route for deleting a Thank
  app.delete("/api/thank/:id", function (req, res) {
    db.Thank.destroy({
      where: {
        id: req.params.id
      }
    }).then(function () {
      res.end();
    });
  });

  // PUT route for updating a Thank
  app.put("/api/thank/:id", function (req, res) {
    console.log("Edited Thank ID:");
    console.log(req.params.id);
    db.Thank.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function (idThank) {
        res.json(idThank);
      });
  });

};
