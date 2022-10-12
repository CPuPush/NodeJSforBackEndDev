'use strict';

const {hashPassword} = require('../helper/bcrypt');

/** @type {import('sequelize-cli').Migration} */
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
  //   const hashedPassword = hashPassword('admin123123')
  //   await queryInterface.bulkInsert('Users', [{
  //     username: "admin",
  //     password: hashedPassword,
  //     createdAt: new Date(),
  //     updatedAt: new Date()
  //   }
  // ],
  //   {}
  //   );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    // await queryInterface.bulkInsert('Users', null,{});
  }
};
