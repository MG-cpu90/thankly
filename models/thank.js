// Creating our Thank model
module.exports = function(sequelize, DataTypes) {
  var Thank = sequelize.define("Thank", {
    // The email cannot be null, and must be a proper email before creation
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
  // Custom methods for a Thank. Currently none
  /* User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };*/

  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // There are no hooks for Thanks.
  /*
  User.addHook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });*/
  return Thank;
};
