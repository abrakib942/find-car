const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
// schema design
const validator = require("validator");

const accessoriesSchema = mongoose.Schema(
  {
    // vehicleId: {
    //   type: ObjectId,
    //   required: true,
    // },
    name: {
      type: String,
      required: [true, "Please provide a name for this Product."],
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

    category: {
      type: String,
    },
    rating: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
    },
    discount: {
      type: Number,
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

const Accessories = mongoose.model("Accessories", accessoriesSchema);

module.exports = Accessories;
