'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('team_members', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4
      },
      team_id:{
        type:Sequelize.UUID,
        allowNull:"false",
        onDelete:"CASCADE",
        references:{
          model:{
            tableName:"teams",
            schema:"public"
          },
          key:"id"
        }
      },
      member_id:{
        type:Sequelize.UUID,
        allowNull:"false",
        onDelete:"CASCADE",
        references:{
          model:{
            tableName:"members",
            schema:"public"
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
    return queryInterface.dropTable('team_members');
  }
};