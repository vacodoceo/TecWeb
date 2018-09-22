
module.exports = (sequelize, DataTypes) => {
  const comment = sequelize.define('comment', {
    description: DataTypes.STRING,
  }, {});
  comment.associate = function (models) {
    comment.belongsTo(models.user)
    comment.belongsTo(models.publication)
  };
  return comment;
};
