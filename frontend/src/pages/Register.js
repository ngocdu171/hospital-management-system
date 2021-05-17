import React from "react";
import { Link } from "react-router-dom";

function Register() {
    function register(event) {
        alert("Clicked!");
        event.preventDefault();
    }
  return (
    <div>
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
          />
          </div>
          <div>
          <label for="">Address</label>
          <input
            type="text"
            class="form-control"
            required="required"
            placeholder="Input field"
          />
          </div>
          <div>
          <label for="">Phone Number</label>
          <input
            type="text"
            class="form-control"
            required="required"
            placeholder="Input field"
          />
          </div>
          <div>
          <label for="">City</label>
          <input
            type="text"
            class="form-control"
            required="required"
            placeholder="Input field"
          />
          </div>
          <div>
          <label for="">PIN Code</label>
          <input
            type="text"
            class="form-control"
            required="required"
            placeholder="Input field"
          />
          </div>
          <div>
          <label for="">Login ID</label>
          <input
            type="text"
            class="form-control"
            required="required"
            placeholder="Input field"
          />
          </div>
          <div>
            <label for="">Password</label>
            <input
              type="password"
              class="form-control"
              required="required"
              placeholder="Enter your Password"
            />
          </div>
          <div>
            <label for="">Confirm Password</label>
            <input
              type="password"
              class="form-control"
              required="required"
              placeholder="Enter your Password"
            />
          </div>
          <div>
          <label for="">Blood Group</label>
          <select>
          <option>A+</option>
          <option>A-</option>
          <option>B+</option>
          <option>B-</option>
          <option>O+</option>
          <option>O-</option>
          <option>AB+</option>
          <option>AB-</option>
          </select>
          </div>
          <div>
          <label for="">Gender</label>
          <select>
          <option>Male</option>
          <option>Female</option>
          </select>
          </div>
          <div>
          <label for="">Date Of Birth</label>
          <input type="date" />
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
