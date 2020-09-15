"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todoItems",
      [
        {
          task: "Play a gig at Seattle",
          deadline: "Monday",
          listId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Play a gig at Denver",
          deadline: "Thursday",
          listId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Play a gig at Montreal",
          deadline: "Friday",
          listId: 3,
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
