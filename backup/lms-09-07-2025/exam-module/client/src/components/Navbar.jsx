// src/components/Navbar.jsx
import React from 'react';
import NavItems from './NavItems';

const ReactBootNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
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

        <div className="collapse navbar-collapse" id="basic-navbar-nav">
          <ul className="navbar-nav me-auto">
            <NavItems />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default ReactBootNavbar;
