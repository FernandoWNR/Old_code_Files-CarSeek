const express = require("express");
const districtController = require("../controllers/districtController");

const router = express.Router();

router.get("/", districtController.getAllDistricts);
router.get("/cities/:id", districtController.getAllCities);
module.exports = router;
