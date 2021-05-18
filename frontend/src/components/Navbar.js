import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-sm navbar-light bg-primary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Hospital System Management</Link>
                <div className="collapse navbar-collapse" id="navbarID">
                    <div className="navbar-nav">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  );
}

export default Navbar;
