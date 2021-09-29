import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import myURL from "../myURL.js";

function Register() {
  let history = useHistory();

  const [fullname, setFullname] = useState();
  const [address, setAddress] = useState();
  const [phone, setPhone] = useState();
  const [city, setCity] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [repassword, setRepassword] = useState();
  const [blood, setBlood] = useState();
  const [gender, setGender] = useState();
  const [dob, setDob] = useState();

  function register(event) {
    // console.log("dob: ", dob);
    event.preventDefault();
    if (password !== repassword) {
      alert("they do not matched!");
    } else {
      axios.get(myURL + "/user").then((res) => {
        var userCheck = res.data.find((e) => e.username === username);
        if (userCheck) {
          alert("Username existed!");
        } else {
          axios
            .post(myURL + "/user", {
              username,
              password,
              fullname,
              address,
              phone,
              city,
              blood,
              gender,
              dob,
            })
            .then((res) => {
              if (res) {
                alert("create successful!");
                history.push("/login");
              } else {
                alert("create fail!");
              }
            });
        }
      });
    }
  }
  return (
    <div className="container">
      <form onSubmit={register}>
        <legend>Registration</legend>

        <div class="form-group">
          <div>
            <label for="">Fullname</label>
            <input
              type="text"
              class="form-control"
              required="required"
              placeholder="Input field"
              value={fullname}
              onChange={(event) => setFullname(event.target.value)}
            />
          </div>
          <div>
            <label for="">Address</label>
            <input
              type="text"
              class="form-control"
              required="required"
              placeholder="Input field"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
            />
          </div>
          <div>
            <label for="">Phone Number</label>
            <input
              type="tel"
              class="form-control"
              required="required"
              placeholder="Input field"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </div>
          <div>
            <label for="">City</label>
            <input
              type="text"
              class="form-control"
              required="required"
              placeholder="Input field"
              value={city}
              onChange={(event) => setCity(event.target.value)}
            />
          </div>
          <div>
            <label for="">Username</label>
            <input
              type="text"
              class="form-control"
              required="required"
              placeholder="Input field"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div>
            <label for="">Password</label>
            <input
              type="password"
              class="form-control"
              required="required"
              placeholder="Enter your Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div>
            <label for="">Confirm Password</label>
            <input
              type="password"
              class="form-control"
              required="required"
              placeholder="Enter your Password"
              value={repassword}
              onChange={(event) => setRepassword(event.target.value)}
            />
          </div>
          <div>
            <label for="">Blood Group</label>
            <select
              value={blood}
              onChange={(event) => setBlood(event.target.value)}
            >
              <option>Select your blood</option>
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
              value={gender}
              onChange={(event) => setGender(event.target.value)}
            >
              <option>Select your gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div>
            <label for="">Date Of Birth</label>
            <input
              type="date"
              value={dob}
              required="required"
              onChange={(event) => setDob(event.target.value)}
            />
          </div>
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
        <div>Have already an account?</div>
        <div>
          <Link to="/login">Login Here</Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
