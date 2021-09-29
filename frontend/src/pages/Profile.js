import React, { useContext, useState } from "react";
import { HSMContext } from "../context";
import moment from "moment";

function Profile() {
  const { patients, userinfo, updateInfo } = useContext(HSMContext);
  // console.log(patients);

  const tam = patients.find(
    (patient) => patient.username === userinfo[0].username
  );
  // console.log(tam);
  // console.log(tam.username);
  const [fullname, setFullname] = useState(tam.fullname);
  const [address, setAddress] = useState(tam.address);
  const [phone, setPhone] = useState(tam.phone);
  const [city, setCity] = useState(tam.city);
  // const [username, setUsername] = useState(tam.username);
  const [blood, setBlood] = useState(tam.blood);
  const [gender, setGender] = useState(tam.gender);
  const [dob, setDob] = useState(tam.dob);
  const [showedit, setShowedit] = useState(false);
  // const [newInfo, setNewInfo] = useState(null);

  function EditInfo(event) {
    //   setNewInfo(
    //     {fullname,address,phone,city,username,blood,gender,dob}
    //   );
    // console.log("thong tin moi:", newInfo);
    // console.log(fullname);
    if (
      fullname !== tam.fullname ||
      address !== tam.address ||
      phone !== tam.phone ||
      city !== tam.city ||
      blood !== tam.blood ||
      gender !== tam.gender ||
      dob !== tam.dob
    ) {
      const _id = tam._id
      const newInfo = { fullname, address, phone, city, blood, gender, dob };
      // console.log(newInfo);
      updateInfo(_id,newInfo);
    }
    alert("Change Profile Successful!");
    event.preventDefault();
    // updateInfo(newInfo);
    // setShowedit(!showedit);
    // alert("editted");
  }

  // function handleInputChange() {
  //   //
  // }

  return (
    <div className="container !direction !spacing">
      {showedit ? (
        <div>
          <div>
          </div>
          <div className="container">
            <form onSubmit={EditInfo}>
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
                    value={fullname}
                    onChange={(event) => setFullname(event.target.value)}
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
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
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
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
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
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                  />
                </div>
                <div>
                  <label for="">Blood Group</label>
                  <select
                    name="blood"
                    value={blood}
                    onChange={(event) => setBlood(event.target.value)}
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
                    value={gender}
                    onChange={(event) => setGender(event.target.value)}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div>
                  <label for="">Date Of Birth</label>
                  <input
                    type="date"
                    required="required"
                    name="dob"
                    value={dob.split("T")[0]}
                    onChange={(event) => setDob(event.target.value)}
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => setShowedit(!showedit)}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div>
          <div>information patient</div>
          <table className="table">
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
                <td colspan="2">
                  {moment(tam.dob.split("T")[0]).format("DD/MM/YYYY")}
                </td>
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