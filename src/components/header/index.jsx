import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const header = () => {
  return (
    <div className="header">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-xl">
          {/* <a class="navbar-brand active-green" href="#">
            INSTANT
          </a> */}
          <Link className="navbar-brand active-green" to="/">
          INSTANT
                </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li class="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
              <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default header;
