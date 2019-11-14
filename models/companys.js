'use strict';
module.exports = (sequelize, DataTypes) => {
  const companies = sequelize.define('companies', {
    id:{
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4
    },
    company_name:{
      type:DataTypes.STRING,
      allowNull:false
    } ,
    is_active: DataTypes.BOOLEAN,
    created_by: DataTypes.UUID,
    updated_by: DataTypes.UUID
  }, {
    underscored: true,
  });
  companies.associate = function(models) {
    companies.hasMany(models.member_of_companies,{
      foreignKey:"company_id",
      onDelete:"CASCADE"
    });
    companies.hasMany(models.projects,{
      foreignKey:"project_id",
      onDelete:"CASCADE"
    })
  };
  return companies;
};