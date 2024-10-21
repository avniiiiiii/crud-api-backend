const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter Product Name"],
    },
    quantity: {
      type: Number,
      required: [true, "Please enter Product Quantity"],
      default: 0,
    },
    price: {
      type: Number,
      required: [true, "Please enter Product Price"],
      default: 0,
    },
    image: {
      type: String,
      default: "", // Default to an empty string for the image URL
    },
  },
  {
    timestamps: true, // Enable timestamps for createdAt and updatedAt fields
  }
);

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
