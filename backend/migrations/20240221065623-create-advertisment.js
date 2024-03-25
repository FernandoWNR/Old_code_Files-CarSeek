"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Advertisments", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      brand: {
        type: Sequelize.STRING,
      },
      model: {
        type: Sequelize.STRING,
      },
      year: {
        type: Sequelize.INTEGER,
      },
      mileage: {
        type: Sequelize.DOUBLE,
      },
      engineCapacity: {
        type: Sequelize.INTEGER,
      },
      condition: {
        type: Sequelize.STRING,
      },
      fuelType: {
        type: Sequelize.STRING,
      },
      ownerType: {
        type: Sequelize.STRING,
      },
      transmission: {
        type: Sequelize.STRING,
      },
      bodyType: {
        type: Sequelize.STRING,
      },
      location: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.DOUBLE,
      },
      imageUrl: {
        type: Sequelize.TEXT,
      },
      description: {
        type: Sequelize.STRING,
      },
      contactName: {
        type: Sequelize.STRING,
      },
      contactEmail: {
        type: Sequelize.STRING,
      },
      contactPhone: {
        type: Sequelize.STRING,
      },
      isHideContact: {
        type: Sequelize.BOOLEAN,
      },
      isApproved: {
        type: Sequelize.BOOLEAN,
      },
      userId: {
        type: Sequelize.INTEGER,
      },
      adminId: {
        type: Sequelize.INTEGER,
      },
      metaData: {
        type: Sequelize.JSON,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Advertisments");
  },
};
