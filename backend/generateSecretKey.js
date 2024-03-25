const crypto = require("crypto");

// Generate a random 32-byte (256-bit) hexadecimal string
const generateSecretKey = () => {
  return crypto.randomBytes(32).toString("hex");
};

const secretKey = generateSecretKey();
console.log("Generated Secret Key:", secretKey);
