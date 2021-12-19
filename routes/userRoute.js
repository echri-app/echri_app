const express= require('express');

const { addUser,
     getUsers,
 } = require('../controllers/user.controller');


const Router = express.Router();



Router.post("/addUser",addUser);
Router.post("/getUser",getUsers);

module.exports= Router;