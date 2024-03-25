const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "CarSeek API",
    description: "carSeek API Documentation",
  },
  host: "localhost:5000",
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./index"];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require("./index"); // Your project's root file
});

swaggerAutogen(outputFile, endpointsFiles, doc);
