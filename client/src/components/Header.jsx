import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container-fluid">
          <Link
            className="navbar-brand fs-2 fst-italic"
            style={{ color: "white" }}
            to="/"
          >
            Order Food
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active fs-5"
                  aria-current="page"
                  to="/"
                  style={{ color: "white" }}
                >
                  Home
                </Link>
              </li>
            </ul>
          </div>
          <div className="d-flex ">
            <Link to="/login">
              <button type="button" class="btn btn-dark mx-2">
                Sign-In
              </button>
            </Link>
            <Link to="/sign-up">
              <button type="button" class="btn btn-dark">
                Sign-Up
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
