'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('members', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4
      },
      member_name: {
        type: Sequelize.STRING,
        allowNull:false
      },
      member_email: {
        type: Sequelize.STRING,
        allowNull:false
      },
      user_id:{
        type:Sequelize.UUID,
        onDelete:"CASCADE",
        allowNull:false,
        references:{
          model:{
            tableName:"users",
            schema:"auth"
          },
          key:"id"
        }
      },
      is_active: {
        type: Sequelize.BOOLEAN
      },
      created_by: {
        type: Sequelize.UUID
      },
      updated_by: {
        type: Sequelize.UUID
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('members');
  }
};