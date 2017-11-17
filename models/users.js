'use strict';
import {Sequelize as DataTypes} from 'sequelize';
module.exports = (sequelize) => {
  var users = sequelize.define('users', {
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return users;
};