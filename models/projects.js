
'use strict';
module.exports = (sequelize, DataTypes) => {
  const projects = sequelize.define('projects', {
    id:{
      allowNull:false,
      primaryKey:true,
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4
    },
    project_name:{
      type:DataTypes.STRING,
      allowNull:false
    } ,
    is_active: DataTypes.BOOLEAN,
    created_by: DataTypes.UUID,
    updated_by: DataTypes.UUID
  }, {
    underscored: true,
  });
  projects.associate = function(models) {
    projects.hasMany(models.teams,{
      foreignKey:"project_id",
      onDelete:"CASCAD"
    });
    projects.belongsTo(models.companies,{
      foreignKey:"company_id",
      onDelete:"CASCADE"
    })
  };
  return projects;
};