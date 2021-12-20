const Product = require("../models/Product");




/*************************** Add product *********************/

exports.addProduct = async (req, res)=>{
    const newProduct = await new Product({...req.body});
    const name_product = req.body.name_product;
    const product = await Product.findOne({name_product});
    try {
        if (product) { return res.status(400).json({ msg: "Product already exist" });}
        newProduct.save();
        res.status(202).json({ msg: "Product added successfully " });
    } catch (error) {
        console.error("Adding product failed", error);
    res.status(402).json({ msg: "Product adding failed" });
    }
};
/*************************** Get all products *********************/

exports.getProducts = async (req, res) => {
  const Products = await Product.find();

  try {
    res.status(202).json({ Products });
  } catch (error) {
    console.log("get products failed", error);
    res.status(402).json({ msg: "Fetch products failed" });

  }
};

/*************************** Get one product *********************/
exports.getProduct = (req, res) => {
  const { _id } = req.params;

  Product.find({ _id })
    .then((product) => res.status(200).json(product[0]))
    .catch((err) => res.json(err));
};


/***************************Edit Product *********************/


exports.editProduct = async (req, res) => {
  let { _id } = req.params;
  try {
    await Product.findByIdAndUpdate({ _id }, { $set: { ...req.body } });
    res.status(203).json({ msg: "Product updated successfully" });
  } catch (error) {
    console.log("Product update failed", error);
    res.status(403).json({ msg: "Product update failed" });
  }
};


/***************************  Delete Product *********************/

exports.deleteProduct = async (req, res) => {
  const { _id } = req.params;

  try {
    await Product.findByIdAndDelete({ _id });
    res.status(200).json({ msg: "Product deleted with success" });
  } catch (error) {
    console.error("Product delete failed", error);
    res.status(402).json({ msg: "Product delete failed" });
  }
};
