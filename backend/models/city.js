"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      City.belongsTo(models.District, { foreignKey: "districtId" });
    }
  }
  City.init(
    {
      districtId: DataTypes.INTEGER,
      name_en: DataTypes.STRING,
      name_si: DataTypes.STRING,
      name_ta: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "City",
    }
  );
  return City;
};
