import { Router } from "express";
import { User } from "./models/User.js";

export const router = Router();

// Defining a route /users to RETURN ALL USERS from DB
router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
    console.log(req.params);
  } catch (err) {
    res.send("Database connection fail : " + err);
  }
});

// Define route /user to ADD A NEW USER TO THE DB
router.post("/user", async (req, res) => {
  const user = new User({
    firstname: "Abdallah",
    lastname: "DIATTA",
    age: 2,
  });
  try {
    await user.save();
    res.send(user);
  } catch (err) {
    res.send("An error has occur when adding a user...");
  }
});

// Define a route /user/:id to EDIT A USER BY ID
router.put("/user/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      { _id: id.params.id },
      { firstname: "Abdallah Bambo" }
    );
    await user.save();
    res.send(user);
  } catch (err) {
    res.send("An error has occur when updatin the user...");
  }
});

// Define a route /user/:id to REMOVE A USER BY ID
router.delete("/user/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete({ _id: req.params.id });
    res.status(204).send("User successfully deleted...");
  } catch (err) {
    res.status(404).send("This user don't exist...");
  }
});
