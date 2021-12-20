const express = require("express");
const isAuth = require("../middlewares/passport-setup");

const {
  addUser,
  getUsers,
  userLogin,
} = require("../controllers/user.controller");

const Router = express.Router();

Router.post("/addUser", addUser);
Router.get("/getUser", getUsers);
Router.post("/login", userLogin);
Router.get("/currentUser", isAuth(), (req, res) => res.send(req.user));

module.exports = Router;
