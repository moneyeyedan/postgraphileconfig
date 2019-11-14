const uuid = require('uuid');
'use strict';
module.exports = (sequelize, DataTypes) => {
  const members = sequelize.define('members', {
    id:{
      allowNull:false,
      primaryKey:true,
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4
    },
    member_name:{
      type:DataTypes.STRING,
      allowNull:false
    } ,
    member_email: {
      type:DataTypes.STRING,
      allowNull:false
    },
    is_active: DataTypes.BOOLEAN,
    created_by: DataTypes.UUID,
    updated_by: DataTypes.UUID
  }, {
    underscored: true,
  });
  members.associate = function(models) {
    members.belongsTo(models.users,{
      foreignKey:"user_id",
      onDelete:"CASCADE"
    });
    members.hasMany(models.member_of_companies,{
      foreignKey:"member_id",
      onDelete:"CASCADE"
    });
    members.hasMany(models.team_members,{
      foreignKey:"member_id",
      onDelete:"CASCADE"
    });
  };
  return members;
};