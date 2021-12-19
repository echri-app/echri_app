const User = require("../models/User")
const bcrypt =require("bcryptjs");

/*************************** Add user *********************/

exports.addUser=async(req,res)=>{

    const new_user=new User({...req.body});
    const email = new_user.email;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(401).json({ msg: "user already exist" });
    }
  
    try {
       // Hashage algorithm complexity
    const salt = await bcrypt.genSalt(10);
    // Hashed password
    const hash = await bcrypt.hash(new_user.password, salt);
    new_user.password = hash;
        await new_user.save();
        res.status(201).json({msg: "User added successfully"});
    } catch (error) {
        
        console.log("adding user failed",error);
        res.status(401).json({msg:"Adding user failed"});
    }

};

// exports.userRegister = async (req, res) => {
//   const newUser = new User({ ...req.body });
//   const email = newUser.email;
//   const user = await User.findOne({ email });

//   if (user) {
//     return res.status(401).json({ msg: "user already exist" });
//   }

 
//   try {
//     // Hashage algorithm complexity
//     const salt = await bcrypt.genSalt(10);
//     // Hashed password
//     const hash = await bcrypt.hash(newUser.password, salt);
//     newUser.password = hash;
//     await newUser.save();
//     res.status(202).json({ msg: "Register success" });
//   } catch (err) {
//     res.status(402).json({ msg: "Register failed" });
//   }
// };

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
