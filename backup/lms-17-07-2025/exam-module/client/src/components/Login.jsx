import React from "react";
import { useNavigate } from "react-router-dom";

import {
  mockCredential as provision,
  loginHandler,
} from "../services/login.js";

const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <a className="nav-link link-underline link-underline-hover cursor-pointer"
        onClick={() => loginHandler(provision(), navigate)}>
        Login
      </a>
    </>
  );
};

export default Login;