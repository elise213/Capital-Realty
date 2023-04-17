import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/CAPITALRLOGO.png";

export const Navbar = () => {
  useEffect(() => {
    setActiveBtn();
    window.addEventListener("popstate", setActiveBtn); // call setActiveBtn on URL change
    return () => {
      window.removeEventListener("popstate", setActiveBtn); // clean up event listener
    };
  }, []);

  function setActiveBtn() {
    const navBtns = document.querySelectorAll(".nav-btn");
    const currentUrl = window.location.pathname;

    navBtns.forEach((btn) => {
      const btnUrl = btn.getAttribute("href");
      if (btnUrl === currentUrl) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
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
            <a href="/" className="btn nav-btn">
              HOME
            </a>
          </span>
          <span className="nav-item">
            <a href="/properties" className="btn nav-btn">
              PORTFOLIO
            </a>
          </span>
          <span className="nav-item">
            <a href="/services" className="btn nav-btn">
              SERVICES
            </a>
          </span>
          <span className="nav-item">
            <a href="/contact" className="btn nav-btn">
              CONTACT
            </a>
          </span>
        </div>
      </div>
    </nav>
  );
};
