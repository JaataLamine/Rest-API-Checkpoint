const mongoose = require("mongoose");

// Defining a mongoose Schema
const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  age: Number,
});

// Creating and exporting user model
module.exports = mongoose.model("User", userSchema);
