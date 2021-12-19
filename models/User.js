const mongoose = require("mongoose")


const userSchema = mongoose.Schema({
    first_name:String,
    last_name:String,
    phone_number:String,
    email:String,
    password:String,
});

module.exports= user=mongoose.model("user", userSchema);