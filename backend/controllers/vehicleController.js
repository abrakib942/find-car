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
    let filters = { ...req.query };

    const excludeFields = ["sort", "page", "limit"];

    excludeFields.forEach((field) => delete filters[field]);

    let filterString = JSON.stringify(filters);
    filterString = filterString.replace(
      /\b(gt|gte|lt|lte)\b/g,
      (match) => `$${match}`
    );

    filters = JSON.parse(filterString);

    let queries = {};

    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      queries.sortBy = sortBy;
      console.log(sortBy);
    }

    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      queries.fields = fields;
    }

    if (req.query.page) {
      const { page = 1, limit = 10 } = req.query;
      const skip = (page - 1) * parseInt(limit);
      queries.skip = skip;
      queries.limit = parseInt(limit);
    }

    const vehicles = await Vehicle.find(filters)
      .skip(queries.skip)
      .limit(queries.limit)
      .select(queries.fields)
      .sort(queries.sortBy);

    const totalVehicles = await Vehicle.countDocuments(filters);
    const totalPages = Math.ceil(totalVehicles / queries.limit);

    res.status(200).json({
      status: "success",
      message: "Data got successfully!",
      data: { totalVehicles, totalPages, vehicles },
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
