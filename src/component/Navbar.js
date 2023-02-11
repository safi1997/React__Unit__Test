import logo from "../logo.png";
import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-info "
        data-testid="Navbar-page"
      >
        <Link className="navbar-brand" to="./home">
          <img src={logo} alt="logo" className=" mx-5 w-50" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse text-white"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav ">
            <Link className="nav-item nav-link text-white active" to="/home">
              Home
            </Link>
            <Link className="nav-item nav-link text-white" to="/teacher">
              Teacher
            </Link>
            <Link className="nav-item nav-link text-white" to="Student">
              Student
            </Link>
            <Link className="nav-item nav-link text-white" to="safi">
              Safi
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
