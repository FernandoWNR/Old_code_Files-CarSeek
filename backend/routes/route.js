const express = require("express");
const advertismentController = require("../controllers/advertismentController");
const router = express.Router();

router.post("/save", advertismentController.save);

module.exports = router;
// Path: backend/controllers/advertismentController.js
