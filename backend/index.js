require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");

const app = express();
const port = process.env.PORT || 5000;

const userRoute = require("./routes/user");
const advertismentsRoute = require("./routes/advrtisments");
const imageUpload = require("./routes/images");
const districtsRoute = require("./routes/districts");
const cors = require("cors");
// const getCarDataRoute = require("./routes/getCarData");

const swaggerUi = require("swagger-ui-express");
/**
 * Represents the Swagger file used for API documentation.
 * @type {object}
 */
const swaggerFile = require("./swagger-output.json");

app.use(cors());

app.use(bodyParser.json());
app.use("/user", userRoute);
app.use("/api/advertisments", advertismentsRoute);
app.use("/api/images", imageUpload);
app.use("/api/districts", districtsRoute);

// app.use("/api/getCarData", getCarDataRoute);

// Routes using async/await with promises
app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
