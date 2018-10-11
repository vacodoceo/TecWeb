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
   
    return queryInterface.bulkInsert('users', [
      {
        firstName: 'Verner',
        lastName: 'Codoceo',
        role: 'admin',
        location: 'Santiago',
        password: 'jeje',
        email: 'vacodoceo@uc.cl',
        reputation: '0',
        createdAt: new Date(), 
        updatedAt: new Date(),
      },
      {
        firstName: 'Usuario',
        lastName: 'Uno',
        role: 'user',
        location: 'Santiago',
        password: 'jeje',
        email: 'usuario@uc.cl',
        reputation: '0',
        createdAt: new Date(), 
        updatedAt: new Date(),
      },
      {
        firstName: 'User',
        lastName: 'Two',
        role: 'user',
        location: 'Valparaiso',
        password: 'jeje',
        email: 'user@uc.cl',
        reputation: '0',
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
    return queryInterface.bulkDelete('users, null, {}');
  }
};
