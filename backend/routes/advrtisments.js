const express = require("express");
const advertismentController = require("../controllers/advertismentController");
const router = express.Router();
const checkAuthMiddleware = require("../middleware/check-auth");

router.post("/", checkAuthMiddleware.checkAuth, advertismentController.save);
router.get("/:id", advertismentController.show);
router.get("/", advertismentController.getAll);
router.patch(
  "/:id",
  checkAuthMiddleware.checkAuth,
  advertismentController.update
);
router.delete(
  "/:id",
  checkAuthMiddleware.checkAuth,
  advertismentController.destroy
);
router.get("/getUserAds:id");
module.exports = router;
// Path: backend/controllers/advertismentController.js
