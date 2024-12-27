import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="navbar bg-dark navbar-expand-md navbar-dark fixed-top">
        <div className="container-fluid">
          <a href="" className="navbar-brand">
            <img
              src="https://pn-paul.netlify.app/image/ff-logo-02.png"
              alt=""
              className="weblogo"
            />
          </a>

          <button
            className="navbar-toggler"
            data-bs-target="#a"
            data-bs-toggle="collapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="navbar-collapse collapse" id="a">
            <ul className="navbar-nav ms-auto text-center">
              <li>
                <Link to="" className="nav-link">
                  HOME
                </Link>
              </li>
              <li>
                <Link to="about" className="nav-link">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link to="brand" className="nav-link">
                  BRAND
                </Link>
              </li>
              <li>
                <Link to="OURTEAM" className="nav-link">
                  OURTEAM
                </Link>
              </li>

              <li>
                <Link to="CONTACT" className="nav-link">
                  CONTACT
                </Link>
              </li>
              <li>
                <Link to="CARRERS" className="nav-link">
                  CARRERS
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
