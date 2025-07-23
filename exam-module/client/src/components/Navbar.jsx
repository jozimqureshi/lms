// src/components/Navbar.jsx
import React from "react";
// import { useEffect, useState } from "react";

import NavItems from "./NavItems";

const ReactBootNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <a className="navbar-brand" href="#home">
        Select Navigation:
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#basic-navbar-nav"
        aria-controls="basic-navbar-nav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <NavItems />
    </nav>
  );
};

export default ReactBootNavbar;
