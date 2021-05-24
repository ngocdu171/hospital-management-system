import express from "express";
import bcrypt from "bcryptjs";
import userModel from "../models/UserModel.js";
import patientModel from "../models/PatientModel.js";

const router = express.Router();

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
      const saltRounds = 4;
      const passwordHash = await bcrypt.hash(req.body.password, saltRounds);
    const newUser = new userModel({
        username: req.body.username,
        password: passwordHash
    });
    const newPatient = new patientModel({
      fullname: req.body.fullname,
      address: req.body.address,
      phone: req.body.phone,
      city: req.body.city,
      username: req.body.username,
      blood: req.body.blood,
      gender: req.body.gender,
      dob: req.body.dob
    });
    try {
      await newUser.save();
      await newPatient.save();
      res.status(201).json({message: "create successful!"});
    } catch (error) {
      res.status(409).json({ message: error });
    }
  }
});

router.post("/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  if (username && password) {
      const user = await userModel.find({username: username});
      if(user.length > 0) {
          // const passwordCorrect = await bcrypt.compare(password, user[0].password);
          const passwordCorrect = await bcrypt.compare(password, user[0].password);
          if(passwordCorrect) {
              // res.status(200).json({message: "login successful!"});
              res.status(200).json({user});
          }
          else {
              res.json({message: "password is not correct"});
          }
      }
      else {
        res.json({message: "username doesn't exist!"});
      }
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

export default router;
