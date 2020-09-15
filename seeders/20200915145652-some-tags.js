"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "tags",
      [
        {
          title: "Important Shit",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Important Staff",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Important Documents",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Not Important Shit",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("tags", null, {});
  },
};
