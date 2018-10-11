'use strict';
module.exports = (sequelize, DataTypes) => {
  const bid = sequelize.define('bid', {
    description: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Date.now()
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Date.now()
    },
  }, {});
  bid.associate = function associate(models) {
    bid.belongsTo(models.user);
    bid.belongsTo(models.publication);
  };
  return bid;
};