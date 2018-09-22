'use strict';
module.exports = (sequelize, DataTypes) => {
  const report = sequelize.define('report', {
    description: DataTypes.STRING,
    user_id: {
      type: DataTypes.UUID,
      allowNull: false
    }

  }, {});
  report.associate = function(models) {
    report.belongsTo(models.user)
  };
  return report;
};