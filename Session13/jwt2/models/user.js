'use strict';
const {
  Model
} = require('sequelize');
const {hashPassword} = require('../helper/bcrypt');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Product)
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      // sequelize validation
      validate:{
        unique:{
          args: true,
          message: "This username has been used"
        }
      }
    },
    password: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate: (user, opt) => {
        const hashedPassword = hashPassword(user.password);
        user.password = hashedPassword;
      },
    }
  });
  return User;
};