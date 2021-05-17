import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div class="navbar">
      <li class="navbar-brand">
        <Link to="/">Hospital System Management</Link>
      </li>
      <ul class="nav navbar-nav">
        <li class="active">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
