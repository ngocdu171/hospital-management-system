import React, { useContext, useState } from "react";
import { HSMContext } from "../context";
import moment from 'moment';

function Profile() {
  const { patients, userinfo, updateInfo } = useContext(HSMContext);
  // console.log(patients);

  const tam = patients.find(
    (patient) => patient.username === userinfo[0].username
  );
  console.log(tam);
  // console.log(tam.username);
  const [fullname, setFullname] = useState();
  const [address, setAddress] = useState();
  const [phone, setPhone] = useState();
  const [city, setCity] = useState();
  const [username, setUsername] = useState();
  const [blood, setBlood] = useState();
  const [gender, setGender] = useState();
  const [dob, setDob] = useState();
  const [showedit, setShowedit] = useState(false);

  function editInfo(event) {
    event.preventDefault();
    console.log(fullname);
    // updateInfo();
    // setShowedit(!showedit);
    // alert("editted");
  }

  return (
    <div class="container !direction !spacing">
      <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
        This is Profile page
      </div>
      {showedit ? (
        <div>
          <div>
            <div>
              <label>asda</label>
            </div>
          </div>
          <div className="container">
            <form onSubmit={editInfo}>
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
                  <input type="date" required="required" value={tam.dob.split("T")[0]} />
                </div>
              </div>

              <button
                type="submit"
                class="btn btn-primary"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div>
          <div>information patient</div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Username</th>
                <td>{tam.username}</td>
              </tr>
              <tr>
                <th scope="row">Fullname</th>
                <td>{tam.fullname}</td>
              </tr>
              <tr>
                <th scope="row">Address</th>
                <td colspan="2">{tam.address}</td>
              </tr>
              <tr>
                <th scope="row">City</th>
                <td colspan="2">{tam.city}</td>
              </tr>
              <tr>
                <th scope="row">Gender</th>
                <td colspan="2">{tam.gender}</td>
              </tr>
              <tr>
                <th scope="row">Phone Number</th>
                <td colspan="2">{tam.phone}</td>
              </tr>
              <tr>
                <th scope="row">Date of Birth</th>
                <td colspan="2">{moment(tam.dob.split("T")[0]).format("DD/MM/YYYY")}</td>
              </tr>
              <tr>
                <th scope="row">Blood</th>
                <td colspan="2">{tam.blood}</td>
              </tr>
            </tbody>
          </table>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => setShowedit(!showedit)}
          >
            edit
          </button>
        </div>
      )}
    </div>
  );
}

export default Profile;
