module.exports = function(sequelize, DataTypes) {
    var Prompts = sequelize.define("Prompts", {

      question: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
    return Prompts;
  };