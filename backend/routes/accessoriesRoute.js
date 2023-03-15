const express = require("express");
const accessoriesController = require("../controllers/accessoriesController");
const router = express.Router();

router
  .route("/")
  .post(accessoriesController.createAccessory)
  .get(accessoriesController.getAccessories);

router
  .route("/:id")
  .get(accessoriesController.getAccessoryById)
  .patch(accessoriesController.updateAccessory)
  .delete(accessoriesController.deleteAccessory);

module.exports = router;
