const mongoose = require("mongoose");
const express = require("express");
const app = express();
const Product = require("./model/product.models.js");
const productRoute = require("./routes/product.routes.js");

// Middleware to parse JSON body data
app.use(express.json());
// Middleware to parse URL-encoded body data
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

// Correcting the order of parameters for the GET route
app.get("/", (req, res) => {
  res.send("Hello from Node API server");
});

mongoose
  .connect(
    "mongodb+srv://AvniAdmin:!nBMxRLW64bDHv.@backenddb.msdrr.mongodb.net/nodeAPI?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected!");
    app.listen(3000, () => {
      console.log("Server 3000 is running");
    });
  })
  .catch(() => console.log("Not Connected!"));

//TO GET / VIEW THE PRODUCTS FROM DB

// app.get("/api/products", async (req, res) => {
//   try {
//     const product = await Product.find({});
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

//TO GET / VIEW A SPECIFIC PRODUCT BASED ON ITS ID

// app.get("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findById(id);
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

//TO ADD A PRODUCT/POST IN DB

// app.post("/api/products", async (req, res) => {
//   try {
//     const product = await Product.create(req.body);
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

//to UPDATE A PRODUCT / PUT API

// app.put("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndUpdate(id, req.body);
//     if (!product) {
//       return res.status(404).json({ message: "product not found" });
//     }
//     // res.status(200).json(product);
//     const updatedProduct = await Product.findById(id); //give me updated product
//     //after finding it from db
//     res.status(200).json(updatedProduct); //updated
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

//TO DELETE A PRODUCT FROM DB

// app.delete("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndDelete(id);
//     if (!product) {
//       return res.status(404).json({ message: "Product not Found" });
//     }
//     res.status(200).json({ message: "Product deleted Successfully" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });
