
'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    id:{
      allowNull:false,
      primaryKey:true,
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4
    },
    username:{
      type:DataTypes.STRING,
      allowNull:false
    } ,
    email: {
      type:DataTypes.STRING,
      allowNull:false
    },
    password: {
      type:DataTypes.STRING,
      allowNull:false
    },
    phone_no: {
      type:DataTypes.STRING,
      allowNull:false
    },
    auth_token: {
      type:DataTypes.STRING
    },
    is_active: DataTypes.BOOLEAN,
    created_by: DataTypes.UUID,
    updated_by: DataTypes.UUID
  }, {
    schema:"auth",
    underscored: true,
  });
  users.associate = function(models) {
    users.hasOne(models.members,{
      foreignKey:"user_id",
      onDelete:"CASCADE"
    })
  };
  return users;
};