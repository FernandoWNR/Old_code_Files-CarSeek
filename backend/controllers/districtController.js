const models = require("../models");

async function getAllDistricts(req, res) {
  try {
    const districts = await models.District.findAll();
    res.status(200).json(districts);
  } catch (error) {
    console.error("Error fetching Districts:", error);
    res.status(500).json({
      message: "Failed to retrieve Districts",
      error: error.message,
    });
  }
}

async function getAllCities(req, res) {
  try {
    const id = req.params.id;
    const cities = await models.District.findByPk(id, {
      include: [models.City],
    });
    res.status(200).json(cities);
  } catch (error) {
    console.error("Error fetching Cities:", error);
    res.status(500).json({
      message: "Failed to retrieve Cities",
      error: error.message,
    });
  }
}
module.exports = {
  getAllDistricts: getAllDistricts,
  getAllCities: getAllCities,
};
