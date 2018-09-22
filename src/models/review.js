'use strict';
module.exports = (sequelize, DataTypes) => {
  const review = sequelize.define('review', {
    score: DataTypes.INTEGER,
    feedback: DataTypes.STRING
  }, {});
  review.associate = function(models) {
    // associations can be defined here
  };
  return review;
};