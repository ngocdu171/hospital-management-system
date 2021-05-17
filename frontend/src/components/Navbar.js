import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        
        <div class="navbar">
            <a class="navbar-brand" href="#">Hospital System Management</a>
            <ul class="nav navbar-nav">
                <li class="active">
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </div>
        
    )
}

export default Navbar
