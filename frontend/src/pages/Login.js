import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { HSMContext } from "../context";
import myURL from "../myURL";

function Login() {
  const { loginSuccess } = useContext(HSMContext);
  // console.log(user);
  let history = useHistory();

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  function Signin(event) {
    event.preventDefault();
    axios
      .post(myURL + "/user/login", { username, password })
      .then((res) => {
        if (res.data.user) {
          // console.log(res.data.user);
          history.push('/');
          const tam = res.data.user;
          loginSuccess(tam);
          // setUserinfo(res.data.user[0].username);
        } else {
          alert(res.data.message);
          // console.log(res.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <form onSubmit={Signin}>
        <legend>Login</legend>

        <div className="form-group">
          <div>
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              required="required"
              placeholder="Enter your Username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              required="required"
              placeholder="Enter your Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <div>Have already an account?</div>
        <div>
          <Link to="/register">Create Account</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
