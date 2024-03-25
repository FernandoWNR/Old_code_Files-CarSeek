const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const models = require("../models");
const Validator = require("fastest-validator");

async function signUp(req, res) {
  try {
    const hashedPassword = await hashPassword(req.body.password);

    const user = {
      id: req.body.id,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashedPassword,
      address: req.body.address,
      phoneNumber: req.body.phoneNumber,
    };

    const userValidationResult = await validateSignUpUser(user);
    if (userValidationResult !== true) {
      return res.status(400).json({
        message: "Validation failed",
        errors: userValidationResult,
      });
    }

    const emailExists = await checkIfEmailExists(user.email);
    if (emailExists) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    await models.User.create(user);

    res.status(201).json({
      message: "User signed up successfully",
      user: user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Something went wrong...",
      error: error.message,
    });
  }
}

async function login(req, res) {
  try {
    const user = {
      email: req.body.email,
      password: req.body.password,
    };

    const userValidationResult = await validateLoginUser(user);
    if (userValidationResult !== true) {
      return res.status(400).json({
        message: "Validation failed",
        errors: userValidationResult,
      });
    }

    const userExist = await models.User.findOne({
      where: { email: user.email },
    });

    if (!userExist) {
      return res.status(400).json({
        message: "Email does not exist. Please sign up first.",
      });
    }

    const passwordIsValid = bcrypt.compareSync(
      user.password,
      userExist.password
    );

    if (!passwordIsValid) {
      return res.status(400).json({
        message: "Password is incorrect",
      });
    }

    const token = jwt.sign(
      { email: user.email, id: userExist.id },
      process.env.JWT_SECRET,
      {
        expiresIn: 86400, // 24 hours
      }
    );

    res.status(200).json({
      message: "User logged in successfully",
      user: userExist,
      accessToken: token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Something went wrong...",
      error: error.message,
    });
  }
}

async function validateSignUpUser(user) {
  const userValidateSchema = {
    id: { type: "number", optional: false },
    firstName: { type: "string", optional: false, max: 100 },
    lastName: { type: "string", optional: false, max: 100 },
    email: {
      type: "string",
      format: "email",
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Email regex pattern
    },
    password: { type: "string", optional: false },
    address: { type: "string", optional: true, max: 255 },
    phoneNumber: { type: "string", optional: true, pattern: /^\d{10}$/ },
  };

  const validator = new Validator();
  return validator.validate(user, userValidateSchema);
}
async function validateLoginUser(user) {
  const userValidateSchema = {
    email: {
      type: "string",
      format: "email",
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Email regex pattern
    },
    password: { type: "string", optional: false },
  };

  const validator = new Validator();
  return validator.validate(user, userValidateSchema);
}

async function checkIfEmailExists(email) {
  const user = await models.User.findOne({ where: { email } });
  return !!user; // Returns true if user exists, false otherwise
}

async function hashPassword(password) {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
}

async function getUserAds(req, res) {
  try {
    const id = req.params.id;
    const advertisments = await models.User.findByPk(id, {
      include: [models.Advertisment],
    });

    if (!advertisments) {
      return res.status(404).json({ message: "Ad not found!" });
    }

    res.status(200).json(advertisments);
  } catch (error) {
    console.error("Error getting ad:", error);
    res.status(500).json({
      message: "Error getting ad",
      error: error.message,
    });
  }
}
module.exports = {
  signUp,
  login,
  getUserAds,
};
