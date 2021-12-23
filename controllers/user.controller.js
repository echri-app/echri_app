const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

/*************************** Add user *********************/

exports.addUser = async (req, res) => {
  const new_user = new User({ ...req.body });
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
    res.status(201).json({ msg: "User added successfully" });
  } catch (error) {
    console.log("adding user failed", error);
    res.status(401).json({ msg: "Adding user failed" });
  }
};
/*************************** Get all user *********************/

exports.getUsers = async (req, res) => {
  const Users = await User.find().populate("commandes");

  try {
    res.status(202).json({ Users });
  } catch (error) {
    console.log("get users failed", error);
    res.status(402).json({ msg: "Fetch users failed" });
  }
};

/*************************** Get one user *********************/
exports.getUser = (req, res) => {
  const { _id } = req.params;

  User.find({ _id })
    .then((user) => res.status(200).json(user[0]))
    .catch((err) => res.json(err));
};

/*************************** User Login *********************/

exports.userLogin = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) return res.status(401).json({ msg: "Bad credentiel" });

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) return res.status(401).json({ msg: "Bad credentiel" });

  try {
    const payload = {
      id: user._id,
      fullName: user.fullName,
      email: user.email,
      adress: user.adress,
    };

    const token = await jwt.sign(payload, process.env.secretOrPrivateKey);

    res.status(200).json({ token: `Bearer ${token}` });
  } catch (err) {
    res.status(400).json({ errors: err });
  }
};
/************************Current User **********************/

/***************************Edit User *********************/

exports.editUser = async (req, res) => {
  let { _id } = req.params;
  try {
    await User.findByIdAndUpdate({ _id }, { $set: { ...req.body } });
    res.status(203).json({ msg: "User updated successfully" });
  } catch (error) {
    console.log("User update failed", error);
    res.status(403).json({ msg: "User update failed" });
  }
};

/***************************  Delete User *********************/

exports.deleteUser = async (req, res) => {
  const { _id } = req.params;

  try {
    await User.findByIdAndDelete({ _id });
    res.status(200).json({ msg: "User deleted with success" });
  } catch (error) {
    console.error("User delete failed", error);
    res.status(402).json({ msg: "User delete failed" });
  }
};

