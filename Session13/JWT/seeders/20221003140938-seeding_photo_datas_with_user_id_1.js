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
    await queryInterface.bulkInsert('Photos',[
    {
      title: 'Foto Pertama Milik UserId 1',
      caption: 'ini foto pertama user id 1',
      image_url: 'https://photopertama.com',
      UserId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Foto kedua Milik UserId 1',
      caption: 'ini foto kedua user id 1',
      image_url: 'https://photokedua.com',
      UserId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Foto Ketiga Milik UserId 1',
      caption: 'ini foto ketiga user id 1',
      image_url: 'https://photopertama.com',
      UserId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
