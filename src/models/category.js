'use strict';
module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define('category', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: DataTypes.STRING,
  }, {});
  category.associate = function(models) {
    category.hasMany(models.publication);
  };
  return category;
};