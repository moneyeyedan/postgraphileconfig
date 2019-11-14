'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('member_of_companies', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4
      },
      member_id: {
        type: Sequelize.UUID,
        allowNull:false,
        onDelete:"CASCADE",
        references:{
          model:{
            tableName:"members",
            schema:"public"
          },
          key:"id"
        }
      },
      company_id: {
        type: Sequelize.UUID,
        allowNull:false,
        onDelete:"CASCADE",
        references:{
          model:{
            tableName:"companies",
            schema:"public"
          },
          key:"id"
        }
      },
      is_active: {
        type: Sequelize.BOOLEAN
      },
      create_by: {
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
    return queryInterface.dropTable('member_of_companies');
  }
};