'use strict';
module.exports = (sequelize, DataTypes) => {
  const teams = sequelize.define('teams', {
    id:{
      type:DataTypes.UUID,
      allowNull:false,
      primaryKey:true,
      defaultValue:DataTypes.UUIDV4
    },
    team_name:{ 
      type:DataTypes.STRING,
      allowNull:true
    } ,
    is_active: DataTypes.BOOLEAN,
    created_by: DataTypes.UUID,
    updated_by: DataTypes.UUID
  }, {
    underscored: true,
  });
  teams.associate = function(models) {
    teams.hasMany(models.team_members,{
      foreignKey:"team_id",
      onDelete:"CASCADE"
    });
    teams.belongsTo(models.projects,{
      foreignKey:"project_id",
      onDelete:"CASCADE"
    });
  };
  return teams;
};