import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HSMContext } from "../context";

function Navbar() {
  const { islogin, userinfo, logout } = useContext(HSMContext);

  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Hospital System Management
          </Link>
          <div className="collapse navbar-collapse" id="navbarID">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
              {islogin ? (
                <div>
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                    onClick={logout}
                  >
                    Logout
                  </Link>
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/profile"
                  >
                    View Profile
                  </Link>
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/appointment"
                  >
                    View Appointment
                  </Link>
                </div>
              ) : (
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/login"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
        {islogin && (
          <p className="username">
            <Link to="/profile">{userinfo[0].username}</Link>
          </p>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
