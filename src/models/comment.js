
module.exports = (sequelize, DataTypes) => {
  const comment = sequelize.define('comment', {
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
  comment.associate = function associate(models) {
    comment.belongsTo(models.user)
    comment.belongsTo(models.publication)
  };
  return comment;
};
