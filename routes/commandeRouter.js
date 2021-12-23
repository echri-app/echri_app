const express = require("express");
const { addProductToCommande } = require("../controllers/commandes.controller");
const isAuth = require("../middlewares/passport-setup");

const Router = express.Router();

Router.post("/addCommande/:idP", isAuth(), addProductToCommande);

module.exports = Router;
