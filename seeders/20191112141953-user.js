'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert({tableName:"users",schema:"auth"}, [{
      id:"308f6b7d-83f7-4886-a635-47b877441d03",
      username: 'manikandan',
      email: "moneykandan995@gmail.com",
      phone_no:"9087746685",
      password:"manikandan",
      created_at:"12-11-2019",
      updated_at:"12-11-2019"
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete({tableName:"users",schema:"auth"}, null, {});
  }
};
