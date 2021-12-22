const mongoose = require("mongoose")


const userSchema = mongoose.Schema({
    first_name:{ type: String, required: true },
    last_name:{ type: String, required: true },
    phone_number:{ type: Number, required: true },
    email:{ type: String, required: true },
    password:String,
    commandes:[]
});

module.exports= user=mongoose.model("user", userSchema);