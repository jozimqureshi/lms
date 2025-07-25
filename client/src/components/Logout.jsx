import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { logoutHandler } from "../services/logout";
import { AuthContext } from "../context/AuthContext";

const Logout = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(AuthContext);

  return (
    <>
      <a className="nav-link link-underline-none link-underline-hover cursor-pointer"
        onClick={(e) => {
          logoutHandler(e, navigate);
          setIsLoggedIn(false);
        }}>
        Logout
      </a>
    </>
  );
};

export default Logout;