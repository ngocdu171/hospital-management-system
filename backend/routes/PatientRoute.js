import express from "express";
import userModel from "../models/UserModel.js";
import patientModel from "../models/PatientModel.js";
import BookModel from "../models/BookAppointment.js";

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
    blood: req.body.blood,
    gender: req.body.gender,
    dob: req.body.dob
  }
  await patientModel.findByIdAndUpdate(_id, newInfo)
  .then(results => {
    res.send(results);
  })
  .catch(error => {
    res.json(error);
  })
});

router.post("/book", async(req,res) => {
  const dateFind = await BookModel.find({ date: req.body.date});
  const timeFind = await BookModel.find({time: req.body.time});
  const doctorFind = await BookModel.find({doctor: req.body.doctor});
  const departmentFind = await BookModel.find({department: req.body.department})
  if( dateFind.length > 0 && timeFind.length > 0 && doctorFind.length > 0 && departmentFind.length > 0 ) {
    res.json({message : "Appointment is not available!"})
  }
  else {
  // res.json({message: "this is route patient book appointment!"});
  const newBook = new BookModel({
    username: req.body.username,
    fullname: req.body.fullname,
    address: req.body.address,
    phone: req.body.phone,
    city: req.body.city,
    blood: req.body.blood,
    gender: req.body.gender,
    date: req.body.date,
    time: req.body.time,
    department: req.body.department,
    doctor: req.body.doctor
  });
  try {
    await newBook.save();
    res.status(201).json({message: "book successful!"});
  } catch (error) {
    res.status(409).json({message: error});
  }
}
});

router.get("/appointment", async(req,res)=>{
  // res.send("this is appointment route");
  try {
    const appointments = await BookModel.find();
    res.status(200).json(appointments);
  } catch (error) {
    res.status(404).json({ message: error });
  }
});

router.delete("/:_id", async(req, res)=>{
  await BookModel.remove({_id: req.params._id})
  .then(results => {
    res.json({ message: "Cancel successfully!"});
  })
  .catch(error => {
    res.json(error);
  })
})

export default router;
