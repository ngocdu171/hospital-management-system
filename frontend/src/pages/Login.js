import React from "react";
import { Link } from "react-router-dom";

function Login() {
    function Signin(event) {
        alert("clicked!!!");
        event.preventDefault();
    }
  return (
    <div>
      <form onSubmit={Signin}>
        <legend>Login</legend>

        <div class="form-group">
          <div>
            <label for="">Username</label>
            <input
              type="text"
              class="form-control"
              required="required"
              placeholder="Enter your Username"
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
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
        <div>
        Have already an account?
        </div>
        <div>
        <Link to="/register">Create Account</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
