module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define("user", {
    uid: {
      type: DataTypes.INTEGER,
      allowNull: false,

    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  });
  return user;
};