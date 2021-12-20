const express = require("express");

const {
  addUser,
  getUsers,
  userLogin,
} = require("../controllers/user.controller");

const Router = express.Router();

Router.post("/addUser", addUser);
Router.get("/getUser", getUsers);
Router.post("/login", userLogin);

module.exports = Router;
