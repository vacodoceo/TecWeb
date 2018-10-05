'use strict'

module.exports = (sequelize, DataTypes) => {  
  const user = sequelize.define('user', {
    // id: {
    //   type: DataTypes.UUID,
    //   primaryKey: true,
    //   defaultValue: DataTypes.UUIDV4
    // },
    firstName: {
      type: DataTypes.STRING,
      required: true
    },
    lastName: {
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
    deletedAt: DataTypes.DATE
  }, {});

  user.associate = function associate(models) {
    user.hasMany(models.publication);
    user.hasMany(models.report);
    user.hasMany(models.review);
  };

  return user;
};