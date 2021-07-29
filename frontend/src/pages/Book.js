import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { HSMContext } from "../context";

function Book() {
  const { userinfo, islogin, bookAppointment } =
    useContext(HSMContext);
  // console.log(userinfo);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [department, setDepartment] = useState(null);
  const [doctor, setDoctor] = useState(null);
  if(userinfo === null) {
    alert("Login first!")
    return (
      // history.push("/login")
      <React.Fragment>
      <Redirect to='/login' />
      </React.Fragment>
    );
  }
  else{
    function BookAppointment(event) {
      event.preventDefault();
      var today = new Date();
      if(today.getMonth()<10){
        var month = "0" + (today.getMonth() + 1)
      }
      else {
        month = today.getMonth()
      }
      var currentDate = today.getFullYear() + "-" + month + "-" + today.getDate();
      // const currentDate = Date().tolocaleString();
      if(department === null || doctor === null || currentDate > date) {
        // if(date < date1) {
        alert("fill the fields !");
      }
      else {
        // const newBook = [date,time,department,doctor];
        // console.log(newBook + "   &   " + date1);
        // console.log(date +"   &   " + date1);
        // console.log(typeof(fullname));
        bookAppointment(date,time,department,doctor);
      }
      
    }
    return (
      <div className="container">
        <form onSubmit={BookAppointment}>
          <legend>Book Appointment</legend>

          <div className="form-group">
            <div>
              <label>Appointment Date</label>
              <input
                type="date"
                required="required"
                name="dob"
                value={date}
                onChange={(event) => setDate(event.target.value)}
              />
            </div>
            <div>
              <label>Appointment Time</label>
              <input
                type="time"
                required="required"
                name="dob"
                value={time}
                onChange={(event) => setTime(event.target.value)}
              />
            </div>
            <div>
              <label>Department</label>
              <select
                name="department"
                value={department}
                onChange={(event) => setDepartment(event.target.value)}
              >
                <option>Select Department</option>
                <option value="Physician">Physician</option>
                <option value="Children Doctor">Children Doctor</option>
                <option value="General Medicine">General Medicine</option>
                <option value="ENT Specialist">ENT Specialist</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Surgery">Surgery</option>
                <option value="Pediatrics">Pediatrics</option>
                <option value="Pharmacy">Pharmacy</option>
                <option value="Laboratory and Blood bank">
                  Laboratory and Blood bank
                </option>
                <option value="Physiotherapy">Physiotherapy</option>
                <option value="Physician11">Physician11</option>
                <option value="Shricharan">Shricharan</option>
              </select>
            </div>
            <div>
              <label>Doctor</label>
              <select
                name="blood"
                value={doctor}
                onChange={(event) => setDoctor(event.target.value)}
              >
                <option>Select Doctor</option>
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

          <button
            type="submit"
            className="btn btn-primary"
            disabled={islogin === false}
          >
            Submit
          </button>
          <button className="btn btn-danger" onClick={() => alert("Cancel!")}>
            Cancel
          </button>
        </form>
      </div>
    );
  }
}
export default Book