const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
// schema design
const validator = require("validator");

const vehicleSchema = mongoose.Schema(
  {
    // vehicleId: {
    //   type: ObjectId,
    //   required: true,
    // },
    name: {
      type: String,
      required: [true, "Please provide a name for this vehicle."],
      trim: true,
      //   lowercase: true,
      minLength: [3, "Name must be at least 3 characters."],
      maxLength: [100, "Name is too large"],
    },
    description: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
      validate: [validator.isURL, "Please provide valid url(s)"],
    },

    price: {
      type: Number,
      required: true,
      min: [0, "Vehicle price can't be negative"],
    },

    type: {
      type: String,
      required: true,
    },
    brand: {
      name: {
        type: String,
        required: true,
      },
      //   brand_id: {
      //     type: ObjectId,
      //     ref: "Brand",
      //     required: true,
      //   },
    },

    model: {
      type: String,
      required: true,
    },
    condition: {
      type: String,
      required: true,
      enum: {
        values: ["New", "Used"],
        message: " condition can't be {VALUE} ",
      },
    },
    mileage: {
      type: Number,
      required: true,
    },
    fuel: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      //   required: true,
    },
    transmission: {
      type: String,
      required: true,
      enum: {
        values: ["Automatic", "Manual", "Semi-Automatic"],
        message: " transmission can't be {VALUE} ",
      },
    },
    doors: {
      type: Number,
      //   required: true,
    },
    engine: {
      type: String,
      //   required: true,
    },
    power: {
      type: Number,
    },
    year: {
      type: Number,
      set: function (value) {
        const year = parseInt(value);
        if (isNaN(year)) {
          throw new Error("Invalid date");
        }
        return year;
      },
      get: function (value) {
        return new Date(value, 0, 1);
      },
    },
    status: {
      type: String,
      required: true,
      enum: {
        values: ["in-stock", "out-of-stock", "discontinued"],
        message: " status can't be {VALUE} ",
      },
    },

    sellCount: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Vehicle = mongoose.model("Vehicle", vehicleSchema);

module.exports = Vehicle;
