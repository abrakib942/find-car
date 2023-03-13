const Vehicle = require("../models/Vehicle");

exports.createVehicle = async (req, res, next) => {
  try {
    const result = await Vehicle.create(req.body);

    res.status(200).json({
      status: "success",
      message: "Data inserted successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Data is not inserted",
      error: error.message,
    });
  }
};

exports.getVehicles = async (req, res) => {
  try {
    const Vehicles = await Vehicle.find({});

    res.status(200).json({
      status: "success",
      message: "Data got successfully!",
      data: Vehicles,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Data is getting",
      error: error.message,
    });
  }
};

exports.getVehicleById = async (req, res) => {
  try {
    const { id } = req.params;

    const vehicle = await Vehicle.findById({ _id: id });

    if (!vehicle) {
      res.status(400).json({
        status: "Failed",
        error: "Couldn't get the Vehicle by this id",
      });
    } else {
      res.status(200).json({
        status: "Success",
        message: "Data got successfully",
        data: vehicle,
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "couldn't get data",
      error: error.message,
    });
  }
};

exports.updateVehicle = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Vehicle.updateOne(
      { _id: id },
      { $set: req.body },
      { upsert: true, runValidators: true }
    );

    if (result.nModified === 0) {
      res.status(400).json({
        status: "failed",
        message: "no data updated",
      });
    } else {
      res.status(200).json({
        status: "Success",
        message: "Data updated",
        data: result,
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "couldn't update data",
      error: error.message,
    });
  }
};
exports.deleteVehicle = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Vehicle.deleteOne({ _id: id });

    if (!result.deletedCount) {
      return res.status(400).json({
        status: "fail",
        error: "Couldn't delete the vehicle",
      });
    }

    res.status(200).json({
      status: "Success",
      message: "Data deleted",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "couldn't delete data",
      error: error.message,
    });
  }
};
