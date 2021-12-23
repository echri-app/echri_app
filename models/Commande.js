const mongoose = require("mongoose");

const commandeSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },

  //  products:[{
  //     type:mongoose.Schema.Types.ObjectId,
  //     ref:"product"
  // }],
  quantity: Number,
  price: Number,
});

module.exports = mongoose.model("Commande", commandeSchema);
