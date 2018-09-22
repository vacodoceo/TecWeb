'use strict'

module.exports = (sequelize, DataTypes) => {  
  const User = sequelize.define('user', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      required: true
    },
    role: {
      type: DataTypes.ENUM,
      values: ['user', 'admin'],
      defaultValue: 'user'
    },
    location: {
        type: DataTypes.STRING,
        required: true
    },
    reputation: {
        type: DataTypes.FLOAT,
        required :false,
        defaultValue: 0
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Date.now()
    },
    updated_at:  DataTypes.DATE,
    deleted_at: DataTypes.DATE
  }, {});

  User.associate = function(models) {
    User.hasMany(models.publication),
    User.hasMany(models.report),
    User.hasMany(models.review)
  };

  return User;
};