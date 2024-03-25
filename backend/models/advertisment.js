"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Advertisment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Advertisment.belongsTo(models.User, { foreignKey: "userId" });
    }
  }
  Advertisment.init(
    {
      title: DataTypes.STRING,
      brand: DataTypes.STRING,
      model: DataTypes.STRING,
      year: DataTypes.INTEGER,
      mileage: DataTypes.DOUBLE,
      engineCapacity: DataTypes.INTEGER,
      condition: DataTypes.STRING,
      fuelType: DataTypes.STRING,
      ownerType: DataTypes.STRING,
      transmission: DataTypes.STRING,
      bodyType: DataTypes.STRING,
      contactName: DataTypes.STRING,
      contactEmail: DataTypes.STRING,
      contactPhone: DataTypes.STRING,
      isHideContact: DataTypes.BOOLEAN,
      location: DataTypes.STRING,
      price: DataTypes.DOUBLE,
      imageUrl: DataTypes.JSON,
      description: DataTypes.STRING,
      isApproved: DataTypes.BOOLEAN,
      userId: DataTypes.INTEGER,
      adminId: DataTypes.INTEGER,
      metaData: DataTypes.JSON,
    },
    {
      sequelize,
      modelName: "Advertisment",
    }
  );
  return Advertisment;
};
