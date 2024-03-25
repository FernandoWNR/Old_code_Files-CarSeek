const express = require("express");
const imageControll = require("../controllers/imageController");
const imageUploder = require("../helpers/imagesUploader");
const checkAuthMiddleware = require("../middleware/check-auth");
const router = express.Router();

router.post(
  "/",
  checkAuthMiddleware.checkAuth,
  imageUploder.multerUpload.array("image", 5),
  imageControll.uploadImages
);

module.exports = router;
