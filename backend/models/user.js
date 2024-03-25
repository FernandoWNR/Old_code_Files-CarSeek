"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(sequelize.define("Advertisment", { as: "advertisments" }));
    }
  }
  User.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      registrationDate: DataTypes.DATE,
      address: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      profilePhoto: DataTypes.STRING,
      lastLoging: DataTypes.DATE,
      subscriptionId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
