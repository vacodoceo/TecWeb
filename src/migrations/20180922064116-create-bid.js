'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('bids', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      bidderId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      receiverId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      publicationId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'publications',
          key: 'id'
        }
      },
      // Luego hay que agregar otra columna opcional por si queremos incluir alguna publicación como oferta
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('bids');
  }
};