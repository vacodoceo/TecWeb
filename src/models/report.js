'use strict';
module.exports = (sequelize, DataTypes) => {
  const report = sequelize.define('report', {
    description: DataTypes.STRING
  }, {});
  report.associate = function(models) {
    // associations can be defined here
  };
  return report;
};