
'use strict';
module.exports = (sequelize, DataTypes) => {
  const member_of_companies = sequelize.define('member_of_companies', {
    id:{
      allowNull:false,
      primaryKey:true,
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4
    },
    is_active: DataTypes.BOOLEAN,
    create_by: DataTypes.UUID,
    updated_by: DataTypes.UUID
  }, {
    underscored: true,
  });
  member_of_companies.associate = function(models) {
    member_of_companies.belongsTo(models.members,{
      foreignKey:"member_id",
      onDelete:"CASCADE"
    });
    member_of_companies.belongsTo(models.companies,{
      foreignKey:"company_id",
      onDelete:"CASCADE"
    });
  };
  return member_of_companies;
};