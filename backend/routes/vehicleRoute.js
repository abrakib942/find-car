const express = require("express");
const vehicleController = require("../controllers/vehicleController");
const router = express.Router();

router
  .route("/")
  .post(vehicleController.createVehicle)
  .get(vehicleController.getVehicles);

router
  .route("/:id")
  .get(vehicleController.getVehicleById)
  .patch(vehicleController.updateVehicle)
  .delete(vehicleController.deleteVehicle);

module.exports = router;
