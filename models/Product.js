const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name_product: String,
  description: String,
  price: String,
  quantity: String,
  category: String,
});

module.exports = Product = mongoose.model("Product", productSchema);
