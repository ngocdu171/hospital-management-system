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

export default router;
