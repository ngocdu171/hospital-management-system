import express from "express";
import userModel from "../models/UserModel.js";
import patientModel from "../models/PatientModel.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const patients = await patientModel.find();
    res.status(200).json(patients);
    // res.status(200).json('user');
  } catch (error) {
    res.status(404).json({ message: error });
  }
});

router.put("/:_id", async (req, res) => {
  const _id = req.params._id;
  const newInfo = {
    fullname: req.body.fullname,
    address: req.body.address,
    phone: req.body.phone,
    city: req.body.city,
    username: req.body.username,
    blood: req.body.blood,
    gender: req.body.blood,
    dob: req.body.dob
  }
  await patientModel.findByIdAndUpdate(_id, newInfo)
  .then(results => {
    res.send(results);
  })
  .catch(error => {
    res.json(error);
  })
})

export default router;
