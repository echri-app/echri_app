require('dotenv').config({path:"./config/.env"});

const express=require("express");
const connectDB = require('./config/connectDB');
const user =require("./routes/userRoute");
const product =require("./routes/productRoute");

const app = express();

app.use(express.json());

connectDB();

app.use("/echri", user);
app.use("/echriproduct", product);


// Server connection
app.listen(process.env.PORT , (err)=>{
    err?  console.log("Server connection failed",err)
    : console.log(`💻 is connected on 🚪 ${process.env.PORT}`);
})