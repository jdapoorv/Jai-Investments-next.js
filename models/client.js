const mongoose = require("mongoose");
// var Schema = mongoose.Schema;

const clientSchema = new mongoose.Schema(
  {
    name: String,
    phone: Number,
    insurance: String,
    message: String,
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.client || mongoose.model("client", clientSchema);
