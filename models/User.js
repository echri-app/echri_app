const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  phone_number: { type: Number, required: true },
  email: { type: String, required: true },
  password: String,
  role: {
    type: String,
    required: true,
    enum: ["admin", "user"],
    default: "user",
  },
  commandes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Commande",
    },
  ],
});

module.exports = User = mongoose.model("user", userSchema);
