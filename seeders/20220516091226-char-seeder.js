'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const dateNow = new Date();
    await queryInterface.bulkInsert('characters', [
      {
        name: 'Hu Tao',
        element: 'Pyro',
        createdAt: dateNow,
        updatedAt: dateNow,
      },
      {
        name: 'Keqing',
        element: 'Electro',
        createdAt: dateNow,
        updatedAt: dateNow,
      },
      {
        name: 'Ganyu',
        element: 'Cryo',
        createdAt: dateNow,
        updatedAt: dateNow,
      },
    ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('characters', null, {});
  }
};
