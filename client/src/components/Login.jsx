import React from "react";

import { useLogin } from '../hooks/useLogin';

const Login = () => {

  const { performLogin } = useLogin();

  return (
    <>
      <a className="nav-link link-underline-none link-underline-hover cursor-pointer"
        onClick={performLogin}>
        Login
      </a>
    </>
  );
};

export default Login;