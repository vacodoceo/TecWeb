'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('publications', [
      {
        title: 'Bici vieja',
        value: 10000,
        description: 'Esta filete',
        exchange_type: 'gift',
        categoryId: 2,
        userId: 2,
        createdAt: new Date(), 
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  return queryInterface.bulkDelete('publications', null, {});
  }
};
