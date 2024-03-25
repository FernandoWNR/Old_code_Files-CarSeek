const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

// Route for user registration
router.post("/signup", userController.signUp);

// Route for user login
router.post("/login", userController.login);

router.get("/getads/:id", userController.getUserAds);

module.exports = router;
