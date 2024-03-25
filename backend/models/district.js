"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class District extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      District.hasMany(sequelize.define("City", { as: "cities" }));
    }
  }
  District.init(
    {
      name_en: DataTypes.STRING,
      name_si: DataTypes.STRING,
      name_ta: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "District",
    }
  );
  return District;
};
