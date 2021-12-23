const express = require("express");
const mongoose = require("mongoose");
const isAuth = require("../middlewares/passport-setup");
const { registerRules, validator } = require("../middlewares/validator");
const {
  addUser,
  getUsers,
  userLogin,
  getUser,
  editUser,
  deleteUser,
  addCommande,
} = require("../controllers/user.controller");

const Router = express.Router();

Router.get("/getUsers", getUsers);
Router.post("/addUser", registerRules(), validator, addUser);
Router.post("/login", userLogin);
Router.get("/currentUser", isAuth(), (req, res) => {
  res.json(req.user);
});
Router.get("/:_id", getUser);
Router.put("/:_id", editUser);
Router.delete("/:_id", deleteUser);
// Router.get("/addCommande", addCommande);

module.exports = Router;
