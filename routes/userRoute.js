const express = require("express");
const isAuth = require("../middlewares/passport-setup");
const { registerRules, validator } = require("../middlewares/validator");
const {
  addUser,
  getUsers,
  userLogin,
  getUser,
  editUser,
  deleteUser,

  
} = require("../controllers/user.controller")

const Router = express.Router();

Router.post("/addUser",  registerRules(), validator , addUser);
Router.get("/getUsers", getUsers);
Router.post("/login", userLogin);
Router.get("/:_id", getUser);
Router.put("/:_id", editUser);
Router.delete("/:_id", deleteUser);



Router.get("/currentUser", isAuth(), (req, res) => res.send(req.user));

module.exports = Router;
