'use strict';
module.exports = (sequelize, DataTypes) => {
  const bid = sequelize.define('bid', {
    description: DataTypes.STRING
  }, {});
  bid.associate = function(models) {
    // associations can be defined here
  };
  return bid;
};