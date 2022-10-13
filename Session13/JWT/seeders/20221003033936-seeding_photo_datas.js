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
    await queryInterface.bulkInsert('Photos', [
    {
      title:'Foto Jadul',
      caption: 'Foto ini diambil dari rumah lama',
      image_url:'https://photojadul.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title:'Foto Mama',
      caption: 'Foto bersama mama di kampung',
      image_url:'https://photokenangan.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title:'Foto Liburan',
      caption: 'Foto Liburan di bali',
      image_url:'https://photobali.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title:'Foto Malming',
      caption: 'Foto bersama pacar malmingan',
      image_url:'https://photokenangan.com',
      createdAt: new Date(),
      updatedAt: new Date(),
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

/*//!UP
field up digunakan untuk melakukan seeding data kepada tabel photo,
//! DOWN
digunakan untuk menghapus data-data pada tabel photo.

untuk membuat data-datanya, kita perlu membuat array of object dan kita sematkan kedalam method //?bulk insert. 
lalu object-object pada array tersebut yang akan mengandung data-datanya.

kita tidak perlu membuat field id pada objectnya karena sequelize sudah memakai auto-increment untuk setiap field id yang tergenerat secara otomatis ketika kita membuat suatu table atau model. Lalu kita tetap perlu membuat field createAt dan updateAt nya untuk keperluan seeding data, walaupun pada nantinya kita tidak perlu membuat createAt dan updateAt pada saat kita melakukan create data karena nilai dari kedua field tersebut akan langsung tergenerate oleh sequelize.
*/