import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/CAPITALRLOGO.png";

export const Navbar = () => {
  function handleActive(event) {
    const navBtns = document.querySelectorAll(".nav-btn");
    navBtns.forEach((item) => {
      item.classList.remove("active");
    });
    event.currentTarget.classList.add("active");
  }

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
          <span className="nav-item">
            <Link to="/">
              <span className="btn nav-btn" onClick={handleActive}>
                HOME
              </span>
            </Link>
          </span>
          <span className="nav-item">
            <Link to="/properties">
              <span className="btn nav-btn" onClick={handleActive}>
                PORTFOLIO
              </span>
            </Link>
          </span>
          <span className="nav-item">
            <Link to="/services">
              <span className="btn nav-btn" onClick={handleActive}>
                SERVICES
              </span>
            </Link>
          </span>
          <span className="nav-item">
            <Link to="/contact">
              <span className="btn nav-btn" onClick={handleActive}>
                CONTACT
              </span>
            </Link>
          </span>
        </div>
      </div>
    </nav>
  );
};
