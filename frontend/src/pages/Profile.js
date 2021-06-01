import React, { useContext, useState } from "react";
import { HSMContext } from "../context";

function Profile() {
  const { patients, userinfo } = useContext(HSMContext);
  // console.log(patients);

  const tam = patients.find(
    (patient) => patient.username === userinfo[0].username
  );
  console.log(tam);
  console.log(tam.username);
  const [fullname, setFullname] = useState();
  return (
    <div class="container !direction !spacing">
      <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
        This is Profile page
      </div>
      <div>
        <div>
        <label>asda</label>
        
        </div>
      </div>
      <div className="container">
        <form>
          <legend>Edit information</legend>

          <div class="form-group">
            <div>
              <label for="">Fullname</label>
              <input
                type="text"
                class="form-control"
                required="required"
                placeholder="Input field"
                value={tam.fullname}
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
                value={tam.address}
              />
            </div>
            <div>
              <label for="">Phone Number</label>
              <input
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                class="form-control"
                required="required"
                placeholder="Input field"
                value={tam.phone}
              />
            </div>
            <div>
              <label for="">City</label>
              <input
                type="text"
                class="form-control"
                required="required"
                placeholder="Input field"
                value={tam.city}
              />
            </div>
            <div>
              <label for="">Username</label>
              <input
                type="text"
                class="form-control"
                required="required"
                placeholder="Input field"
                value={tam.username}
              />
            </div>
            <div>
              <label for="">Blood Group</label>
              <select value={tam.blood}>
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
              <select value={tam.gender}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div>
              <label for="">Date Of Birth</label>
              <input type="date" required="required" value={tam.dob} />
            </div>
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Profile;
