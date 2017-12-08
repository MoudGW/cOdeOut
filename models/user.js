module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define("user", {
    uid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
     html: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
     js: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
     css: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
       jquery:{
      type: DataTypes.INTEGER,
      allowNull: true,
    },
     node: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    mysql: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
       reactjs: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
      mongodb: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }

  });
  return user;
};
