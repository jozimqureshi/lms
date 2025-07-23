// src/components/NavItems.jsx
import React from "react";
import { Link } from "react-router-dom";

const NavItems = () => {
  return (
    <>
      <div className="collapse navbar-collapse" id="basic-navbar-nav">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/view-exams">
              View Exams
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/new-exam">
              New Exam
            </Link>
          </li>

          {/* Optional dropdown example */}
          {/*
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Dropdown
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><a className="dropdown-item" href="#">Action</a></li>
          <li><a className="dropdown-item" href="#">Another action</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </li>
      */}
        </ul>
      </div>
    </>
  );
};

export default NavItems;
