'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn("Products","UserId",{
      type: Sequelize.INTEGER,
    });
    
    await queryInterface.addConstraint("Products",{
      fields:["UserId"],
      type:"foreign_key",
      name: "product_fk",
      references: {
        table: "Users",
        filed:"id",
      },
      onUpdate:"CASCADE",
      onDelete: "CASCADE",
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeConstraint("Products", "product_fk");
    await queryInterface.removeColumn("Products", "UserId");
  }
};
