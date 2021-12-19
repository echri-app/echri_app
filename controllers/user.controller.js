const User = require("../models/User")
const bcrypt =require("bcryptjs");

/*************************** Add user *********************/

exports.addUser=async(req,res)=>{

    const new_user=new User({...req.body});

    try {
       
        await new_user.save();
        res.status(201).json({msg: "User added successfully"});
    } catch (error) {
        
        console.log("adding user failed",error);
        res.status(401).json({msg:"Adding user failed"});
    }

};



/*************************** Get all user *********************/

exports.getUsers = async (req, res) => {
    const Users = await User.find();
  
    try {
      res.status(202).json({ Users });
    } catch (error) {
      console.log("get users failed", error);
      res.status(402).json({ msg: "Fetch users failed" });
    }
  };
