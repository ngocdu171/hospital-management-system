const express = require("express");
const router = express.Router();

const userModel = require("../models/UserModel");

router.get("/", async (req, res) => {
  try {
    const user = await userModel.find();
    res.status(200).json(user);
    // res.status(200).json('user');
  } catch (error) {
    res.status(404).json({ message: error });
  }
});

router.post("/", async (req, res) => {
  const usernameFind = await userModel.find({ username: req.body.username });
  if (usernameFind.length > 0) {
    res.json({ message: "username existed!" });
  } else {
    const newUser = new userModel({
        username: req.body.username,
        password: req.body.password
    });
    try {
      await newUser.save();
      res.status(201).json({message: "create successful!"});
    } catch (error) {
      res.status(409).json({ message: error });
    }
  }
});

router.get("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  if (username && password) {
    res.send("kakaka");
  } else {
    res.json({ message: "fill the form!!!" });
  }
});

router.delete('/:_id', async (req, res) => {
    const _id = req.params._id;
    await userModel.findByIdAndRemove(_id)
    try {
        res.status(200).json({message: "delete successful!"});
    } catch (error) {
        res.status(200).json({message: error});
    }
});

module.exports = router;
