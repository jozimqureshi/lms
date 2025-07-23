import React, { useContext } from "react";

import Login from "./Login";
import Logout from "./Logout";
import { AuthContext } from "../context/AuthContext";

const ToggleLogin = () => {
  const { isLoggedIn } = useContext(AuthContext); // Calling Context - { } is the object destructuring

  return <>{isLoggedIn ? <Login /> : <Logout />}</>;
};

export default ToggleLogin;
