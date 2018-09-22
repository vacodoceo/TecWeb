
module.exports = (sequelize, DataTypes) => {
  const comment = sequelize.define('comment', {
    description: DataTypes.STRING,
  }, {});
  comment.associate = function (models) {
    // associations can be defined here
  };
  return comment;
};
