import React from 'react'
import './Navbar.css'
import {
    Link
  } from "react-router-dom";
export default function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid ">
    <Link className="navbar-brand" to="/">BookVerse</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item dropdown">

          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Materials
          </Link>
          <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/Mchemical.js">Chemical Engineering</Link></li>
                <li><Link className="dropdown-item" to="/Mit.js">Information Technology</Link></li>
                <li><Link className="dropdown-item" to="/Miot.js">Internet of Things</Link></li>
                <li><Link className="dropdown-item" to="/Mme.js">Mechanical Engineering</Link></li>
                <li><Link className="dropdown-item" to="/Mec.js">Electronics & Communication</Link></li>
                <li><Link className="dropdown-item" to="/Mmecha.js">Mechatronics Engineering</Link></li>
                <li><Link className="dropdown-item" to="/Mcp.js">Computer Engineering</Link></li>
                <li><Link className="dropdown-item" to="/Mcsd.js">Computer Science & Design</Link></li>
                <li><Link className="dropdown-item" to="/Mee.js">Electrical Engineering</Link></li>
                <li><Link className="dropdown-item" to="/Mcivil.js">Civil Engineering</Link></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Lab Mannuals
          </Link>
          <ul className="dropdown-menu">
               <li><Link className="dropdown-item" to="/Lchemical.js">Chemical Engineering</Link></li>
                <li><Link className="dropdown-item" to="/Lit.js">Information Technology</Link></li>
                <li><Link className="dropdown-item" to="/Liot.js">Internet of Things</Link></li>
                <li><Link className="dropdown-item" to="/Lme.js">Mechanical Engineering</Link></li>
                <li><Link className="dropdown-item" to="/Lec.js">Electronics & Communication</Link></li>
                <li><Link className="dropdown-item" to="/Lmecha.js">Mechatronics Engineering</Link></li>
                <li><Link className="dropdown-item" to="/Lcp.js">Computer Engineering</Link></li>
                <li><Link className="dropdown-item" to="/Lcsd.js">Computer Science & Design</Link></li>
                <li><Link className="dropdown-item" to="/Lee.js">Electrical Engineering</Link></li>
                <li><Link className="dropdown-item" to="/Lcivil.js">Civil Engineering</Link></li>
          </ul>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/About.js">About</Link>
      </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
