import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import myURL from '../myURL';

function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

    function Signin(event) {
        event.preventDefault();
          axios.post(myURL+'/user/login',{username,password})
          .then(res => {
            if(res.data.user) {
              console.log(res.data.user);
            }
            else {
              console.log(res.data.message);
            }
          })
          .catch(error => {
            console.log(error);
          })
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
              value={username}
              onChange={(event)=>setUsername(event.target.value)}
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
              onChange={(event)=>setPassword(event.target.value)}
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
