'use strict';
module.exports = (sequelize, DataTypes) => {
  const publication = sequelize.define('publication', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    logo: DataTypes.STRING,
    value: DataTypes.INTEGER,
    description: DataTypes.STRING,
    exchange_type: DataTypes.STRING
  }, {});
  publication.associate = function(models) {
    publication.belongsTo(models.category);
  };
  return publication;
};