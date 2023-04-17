import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/CAPITALRLOGO.png";

export const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-expand-md navbar-light mb-3"
      id="navbar"
    >
      {/* Navbar Brand Logo - Link to Home - Always Visible*/}
      <div className="container-fluid">
        <Link to="/">
          <span className="navbar-brand">
            <img className="navbar-logo" src={logo}></img>
          </span>
        </Link>
        {/* Dynamic Navbar collapse-expand */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
          style={{ flexGrow: "0" }}
        >
          {/* Links */}
          <div className="ml-auto"></div>
          {/* <span className="nav-item">
            <Link to="/principals">
              <span className="btn nav-btn">TEAM</span>
            </Link>
          </span> */}
          <span className="nav-item">
            <Link to="/properties">
              <span className="btn nav-btn">PORTFOLIO</span>
            </Link>
          </span>
          <span className="nav-item">
            <Link to="/services">
              <span className="btn nav-btn">SERVICES</span>
            </Link>
          </span>
          <span className="nav-item">
            <Link to="/contact">
              <span className="btn nav-btn">CONTACT</span>
            </Link>
          </span>
        </div>
      </div>
    </nav>
  );
};
