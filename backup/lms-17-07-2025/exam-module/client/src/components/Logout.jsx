import React from "react";
import { useNavigate } from "react-router-dom";

import { logoutHandler } from "../services/logout";

const Logout = () => {
  const navigate = useNavigate();

  return (
    <>
      <a className="nav-link link-underline link-underline-hover cursor-pointer"
        onClick={(e) => logoutHandler(e, navigate)}>
        Logout
      </a>
    </>
  );
};

export default Logout;