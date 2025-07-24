import React from "react";
import { useNavigate } from "react-router-dom";

import { mockCredential as provision, loginHandler } from "../services/login.js";

const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="row d-flex justify-content-center">
        <div className="col-7 text-center">
          <form name="frmLogin" className="frmLogin" id="frmLogin">
            <button
              type="button"
              name="btnLogin"
              className="btnLogin"
              id="btnLogin"
              onClick={() => loginHandler(provision(), navigate)}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
