'use strict';
module.exports = (sequelize, DataTypes) => {
  const publication = sequelize.define('publication', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    logo: DataTypes.STRING,
    value: DataTypes.INTEGER,
    description: DataTypes.STRING,
    exchange_type: DataTypes.STRING,
    // Cada objeto necesita si o si un id de usuario.
    // Dejo Link, aparece explicado muy filete
    // https://lorenstewart.me/2016/10/03/sequelize-crud-101/
    user_id: {
      type: DataTypes.UUID,
      // Mas adelante tenemos que ponerle false aca
      allowNull: true
    }
  }, {});
  publication.associate = function(models) {
    publication.belongsTo(models.category);
    publication.belongsTo(models.user);
  };
  return publication;
};