const Accessories = require("../models/Accessories");

exports.createAccessory = async (req, res, next) => {
  try {
    const result = await Accessories.create(req.body);

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

exports.getAccessories = async (req, res) => {
  try {
    const accessories = await Accessories.find({});

    res.status(200).json({
      status: "success",
      message: "Data got successfully!",
      data: accessories,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Data is getting",
      error: error.message,
    });
  }
};

exports.getAccessoryById = async (req, res) => {
  try {
    const { id } = req.params;

    const accessory = await Accessories.findById({ _id: id });

    if (!accessory) {
      res.status(400).json({
        status: "Failed",
        error: "Couldn't get the Product by this id",
      });
    } else {
      res.status(200).json({
        status: "Success",
        message: "Data got successfully",
        data: accessory,
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

exports.updateAccessory = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Accessories.updateOne(
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
exports.deleteAccessory = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Accessories.deleteOne({ _id: id });

    if (!result.deletedCount) {
      return res.status(400).json({
        status: "fail",
        error: "Couldn't delete the product",
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
