"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todoItems",
      [
        {
          task: "Play a gig at Seattle",
          deadline: "Monday",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Play a gig at Denver",
          deadline: "Thursday",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Play a gig at Montreal",
          deadline: "Friday",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("todoItems", null, {});
  },
};
