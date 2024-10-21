const express = require("express");
const Product = require("../model/product.models.js");

const router = express.Router();
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller.js");

// Route to get all products
router.get("/", getProducts);

// Route to get a specific product by ID
router.get("/:id", getProduct);

// Route to create a new product
router.post("/", createProduct);

// Route to update an existing product by ID
router.put("/:id", updateProduct);

// Route to delete a product by ID
router.delete("/:id", deleteProduct);

module.exports = router;
