import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { mockCredential as provision, loginHandler } from "../services/login.js";
import { AuthContext } from "../context/AuthContext.jsx";

const Login = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(AuthContext);

  return (
    <>
      <a className="nav-link link-underline link-underline-hover cursor-pointer"
        onClick={() => {
          loginHandler(provision(), navigate);
          setIsLoggedIn(true); // It's same as literal vs premitive variable - setIsLoggedIn() is the reference of actual object created within AuthContext.
        }}>
        Login
      </a>
    </>
  );
};

export default Login;