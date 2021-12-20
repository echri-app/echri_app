const express = require("express");


const {
  addProduct,
  getProducts,
  getProduct,
  editProduct,
  deleteProduct,
} = require("../controllers/product.controller");

const Router = express.Router();

Router.post("/addProduct", addProduct);
Router.get("/getProducts", getProducts);
Router.get("/:_id", getProduct);
Router.put("/:_id", editProduct);
Router.delete("/:_id", deleteProduct);




module.exports = Router;
