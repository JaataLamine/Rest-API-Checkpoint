const mongoose = require("mongoose");
require("dotenv").config();

// Connect to MongoDB database
const dbConnection = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://alamine007:diatto1234@rest-api-checkpoint.ruenxud.mongodb.net/gomycode",
      {
        useNewUrlParser: true,
      }
    );
    console.log("DB Connection Successful.");
  } catch (err) {
    console.error(err);
  }
};

module.exports = dbConnection;
