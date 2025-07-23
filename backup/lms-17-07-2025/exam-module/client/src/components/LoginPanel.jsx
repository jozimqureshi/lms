import React from "react";

import Login from './Login';
import Logout from './Logout';

const loginUser = localStorage.getItem('username');

const ToggleLogin = () => {
  return (
    <>
      {
        loginUser ? <Login /> : <Logout />
      }
    </>
  );
};

export default ToggleLogin;