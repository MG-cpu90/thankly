// Creating our Thank model
module.exports = function(sequelize, DataTypes) {
  var Thank = sequelize.define("Thank", {
    // The author and body cannot be null
    prompt: {
      type: DataTypes.STRING,
      allowNull: true
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
  });

  return Thank;
};
