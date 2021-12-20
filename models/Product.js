const mongoose = require("mongoose")


const productSchema = mongoose.Schema({
    name_product:String,
    description:String,
    price:String,
    quantity:String,
    category:String,
});

module.exports= user=mongoose.model("Product", productSchema);