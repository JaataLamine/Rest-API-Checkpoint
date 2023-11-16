const express = require("express");
const dbConnection = require("./config/dbConnection");
const User = require("./models/User");

// Express initiation
const app = express();

// Launch mongodb connection
dbConnection();

// GET : to /users RETURN ALL USERS from mongoDB
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
    console.log(req.params);
  } catch (err) {
    res.send("Database connection fail : " + err);
  }
});

// POST : to /user ADD A NEW USER TO THE DATABASE
app.post("/user", async (req, res) => {
  const user = new User({
    firstname: "Ngone",
    lastname: "SARR",
    age: 2,
  });
  try {
    await user.save();
    res.send(user);
  } catch (err) {
    res.send("Can't add a user...");
  }
});

// PUT : to /user/:id EDIT A USER BY ID
app.put("/user/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      { _id: req.params.id },
      {
        age: 14,
      }
    );
    await user.send();
    res.send(user);
  } catch (err) {
    res.send("Can't update the user...");
  }
});

// DELETE : to /user/:id REMOVE A USER BY ID
app.delete("/user/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete({ _id: req.params.id });
    res.status(204).send("User delete successfully.");
  } catch (err) {
    res.status(404).send("This user don't exist...");
  }
});

const port = 3000;
app.listen(port, () =>
  console.log(`Server running on : http://localhost:${port}`)
);
