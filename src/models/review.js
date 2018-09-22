'use strict';
module.exports = (sequelize, DataTypes) => {
  const review = sequelize.define('review', {
    score: DataTypes.INTEGER,
    feedback: DataTypes.STRING,
    // Cada Review necesita un user ID
    user_id: {
      type: DataTypes.UUID,
      allowNull: false
    }
  }, {});
  review.associate = function(models) {
    review.belongsTo(models.user)
  };
  return review;
};