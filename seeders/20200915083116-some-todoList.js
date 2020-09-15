"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todoLists",
      [
        {
          name: "Tune my Guitar",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Clear my Guitar",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Break my Guitar",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("todoLists", null, {});
  },
};
