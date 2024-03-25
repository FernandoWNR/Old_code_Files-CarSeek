const models = require("../models");
const Validator = require("fastest-validator");

const advertisementSchema = {
  title: { type: "string", optional: true, max: 100 },
  brand: { type: "string", optional: false, max: 100 },
  model: { type: "string", optional: false, max: 100 },
  year: { type: "number", min: 1980, max: new Date().getFullYear() },
  mileage: { type: "number", positive: true },
  engineCapacity: { type: "number", optional: false, positive: true },
  condition: { type: "string", optional: true },
  description: { type: "string", optional: true },
  location: { type: "string", optional: true },
  price: { type: "number", positive: true },
};

const validator = new Validator();

async function validateAdvertisement(advertisement) {
  try {
    return await validator.validate(advertisement, advertisementSchema);
  } catch (error) {
    throw new Error("Validation failed");
  }
}

async function save(req, res) {
  try {
    const advertisement = ({
      title,
      brand,
      model,
      year,
      mileage,
      engineCapacity,
      condition,
      description,
      location,
      price,
      isApproved,
      userId,
      adminId,
    } = req.body);

    const validationResponse = await validateAdvertisement(advertisement);

    if (validationResponse !== true) {
      return res.status(400).json({
        message: "Validation failed",
        errors: validationResponse,
      });
    }

    await models.Advertisment.create(advertisement);
    res.status(201).json({
      message: "Ad created successfully",
      post: advertisement,
    });
  } catch (error) {
    console.error("Error saving advertisement:", error);
    res.status(500).json({
      message: "Something went wrong...",
      error: error.message,
    });
  }
}

async function show(req, res) {
  try {
    const id = req.params.id;
    const advertisment = await models.Advertisment.findByPk(id);

    if (!advertisment) {
      return res.status(404).json({ message: "Ad not found!" });
    }

    res.status(200).json(advertisment);
  } catch (error) {
    console.error("Error getting ad:", error);
    res.status(500).json({
      message: "Error getting ad",
      error: error.message,
    });
  }
}

async function getAll(req, res) {
  try {
    const advertisments = await models.Advertisment.findAll();
    res.status(200).json(advertisments);
  } catch (error) {
    console.error("Error fetching advertisements:", error);
    res.status(500).json({
      message: "Failed to retrieve advertisements",
      error: error.message,
    });
  }
}

async function update(req, res) {
  try {
    const id = req.params.id;
    const updatedAdvertisement = ({
      title,
      brand,
      model,
      year,
      mileage,
      engineCapacity,
      condition,
      description,
      location,
      price,
      imageUrl,
    } = req.body);

    const validationResponse = await validateAdvertisement(
      updatedAdvertisement
    );

    if (validationResponse !== true) {
      return res.status(400).json({
        message: "Validation failed",
        errors: validationResponse,
      });
    }

    const [updateRowsCount] = await models.Advertisment.update(
      updatedAdvertisement,
      {
        where: { id },
      }
    );

    if (updateRowsCount > 0) {
      res.status(200).json({ message: "Ad updated successfully" });
    } else {
      res.status(404).json({ message: "Ad not found or permission denied" });
    }
  } catch (error) {
    console.error("Error updating advertisement:", error);
    res.status(500).json({
      message: "Something went wrong...",
      error: error.message,
    });
  }
}

async function destroy(req, res) {
  try {
    const id = req.params.id;
    const deletedRows = await models.Advertisment.destroy({
      where: { id },
    });

    if (deletedRows > 0) {
      res.status(200).json({ message: "Ad deleted successfully" });
    } else {
      res.status(404).json({ message: "Ad not found or permission denied" });
    }
  } catch (error) {
    console.error("Error deleting advertisement:", error);
    res.status(500).json({
      message: "Something went wrong...",
      error: error.message,
    });
  }
}

module.exports = {
  save,
  show,
  getAll,
  update,
  destroy,
  getAll,
};
