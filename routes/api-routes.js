// Requiring our models sequelize
const db = require("../models");
const Sequelize = require("sequelize");

module.exports = function (app) {

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
