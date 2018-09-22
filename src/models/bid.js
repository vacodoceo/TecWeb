'use strict';
module.exports = (sequelize, DataTypes) => {
  const bid = sequelize.define('bid', {
    description: DataTypes.STRING,
    // Cada bid necesita tener al menos un usuario, el que lo crea
    // Le pondria otro mas con el del dueno de la publicacion
    user_id: {
      type: DataTypes.UUID,
      allowNull: false
    }
  }, {});
  bid.associate = function(models) {
    bid.belongsTo(models.User)
  };
  return bid;
};