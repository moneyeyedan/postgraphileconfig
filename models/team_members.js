const uuid = require('uuid');
'use strict';
module.exports = (sequelize, DataTypes) => {
  const team_members = sequelize.define('team_members', {
    id:{
      allowNull:false,
      primaryKey:true,
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4
    },
    is_active: DataTypes.BOOLEAN,
    created_by: DataTypes.UUID,
    updated_by: DataTypes.UUID
  }, {
    underscored: true,
  });
  team_members.associate = function(models) {
    team_members.belongsTo(models.teams,{
      foreignKey:"team_id",
      onDelete:"CASCADE"
    });
    team_members.belongsTo(models.members,{
      foreignKey:"member_id",
      onDelete:"CASCADE"
    });
  };
  return team_members;
};