const Commande = require("../models/Commande");
const User = require("../models/User");


/******************** Add Product To Commande*******************/

exports.addProductToCommande = async (req, res) => {
  console.log(req.user);
  const newCommande = new Commande({
    userId: req.user.id,
    productId: req.params.idP,
    ...req.body,
  });
  try {
    const user = await User.findOne({ _id: req.user.id });
    console.log("user", user);
    user.commandes = [...user.commandes, newCommande.id];
    await user.save();
    await newCommande.save();
    res.status(201).json({ msg: "Register commande success", newCommande });
  } catch (error) {
    console.log(error);
    res.status(401).json({ msg: "Register commande Failed" });
  }
};
