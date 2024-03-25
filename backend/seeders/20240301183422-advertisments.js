"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Advertisments", [
      {
        id: 1,
        title: "Car 1",
        brand: "Brand A",
        model: "Model X",
        year: 2022,
        mileage: 15000.5,
        engineCapacity: 2000,
        condition: "Good",
        fuelType: "Petrol",
        ownerType: "Individual",
        transmission: "Automatic",
        bodyType: "Sedan",
        location: "City A",
        price: 25000.0,
        description: "This is a sample car description.",
        contactName: "John Doe",
        contactEmail: "john@example.com",
        contactPhone: "123-456-7890",
        isHideContact: false,
        isApproved: true,
        userId: 1,
        adminId: 2,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Advertisments", null, {});
  },
};
