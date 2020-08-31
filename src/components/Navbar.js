import React from "react";
import logo from '../images/MiniBar1.png'; 
import { Link } from "react-router-dom";



export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <img src={logo} alt="mini bar logo" className="logo"/>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            {/* <Link to="/search">Search</Link> */}
          </li>
        </ul>
      </div>
    </nav>
  );
}