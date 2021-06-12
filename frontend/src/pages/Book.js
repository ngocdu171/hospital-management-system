import React, { useContext, useState } from 'react'
import { HSMContext } from '../context'

function Book() {
    const {patients, userinfo, islogin} = useContext(HSMContext);
    // console.log(patients);
    const tam = patients.find(patient => patient.username === userinfo[0].username);

    const [date, setDate] = useState();
    const [time, setTime] = useState();
    const [department, setDepartment] = useState();
    const [doctor, setDoctor] = useState();

    function BookAppointment(event) {
      alert("BookAppointment!!!!");
      event.preventDefault();
    }

    return (
        <div className="container">
            <form onSubmit={BookAppointment}>
              <legend>Edit information</legend>

              <div className="form-group">
                <div>
                  <label for="">Fullname</label>
                  <input
                    type="text"
                    className="form-control"
                    required="required"
                    placeholder="Input field"
                    name="fullname"
                  />
                </div>
                <div>
                  <label for="">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    required="required"
                    placeholder="Input field"
                    name="address"
                  />
                </div>
                <div>
                  <label for="">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    required="required"
                    placeholder="Input field"
                    name="phone"
                  />
                </div>
                <div>
                  <label for="">City</label>
                  <input
                    type="text"
                    className="form-control"
                    required="required"
                    placeholder="Input field"
                    name="city"
                  />
                </div>
                <div>
                  <label for="">Blood Group</label>
                  <select
                    name="blood"
                  >
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                  </select>
                </div>
                <div>
                  <label for="">Gender</label>
                  <select
                    name="gender"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div>
                  <label for="">Appointment Date</label>
                  <input
                    type="date"
                    required="required"
                    name="dob"
                    value={date}
                    onChange={(event)=>setDate(event.target.value)}
                  />
                </div>
                <div>
                  <label for="">Appointment Time</label>
                  <input
                    type="time"
                    required="required"
                    name="dob"
                    value={time}
                    onChange={(event)=>setTime(event.target.value)}
                  />
                </div>
                <div>
                  <label for="">Department</label>
                  <select
                    name="department"
                    value={department}
                    onChange={(event)=>setDepartment(event.target.value)}
                  >
                    <option >Select Department</option>
                    <option value="Physician">Physician</option>
                    <option value="Children Doctor">Children Doctor</option>
                    <option value="General Medicine">General Medicine</option>
                    <option value="ENT Specialist">ENT Specialist</option>
                    <option value="Neurologist">Neurologist</option>
                    <option value="Surgery">Surgery</option>
                    <option value="Pediatrics">Pediatrics</option>
                    <option value="Pharmacy">Pharmacy</option>
                    <option value="Laboratory and Blood bank">Laboratory and Blood bank</option>
                    <option value="Physiotherapy">Physiotherapy</option>
                    <option value="Physician11">Physician11</option>
                    <option value="Shricharan">Shricharan</option>
                  </select>
                </div>
                <div>
                  <label for="">Doctor</label>
                  <select
                    name="blood"
                    value={doctor}
                    onChange={(event)=>setDoctor(event.target.value)}
                  >
                  <option >Select Doctor</option>
                    <option value="Doctor 01">Doctor 01</option>
                    <option value="Doctor 02">Doctor 02</option>
                    <option value="Doctor 03">Doctor 03</option>
                    <option value="Doctor 04">Doctor 04</option>
                    <option value="Doctor 05">Doctor 05</option>
                    <option value="Doctor 06">Doctor 06</option>
                    <option value="Doctor 07">Doctor 07</option>
                    <option value="Doctor 08">Doctor 08</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="btn btn-primary" disabled={islogin===false}>
                Submit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => alert("Cancel!")}
              >
                Cancel
              </button>
            </form>
          </div>
    )
}

export default Book
