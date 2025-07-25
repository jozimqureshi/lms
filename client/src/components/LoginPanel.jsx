import React, { useContext } from "react";

import Login from "./Login";
import Logout from "./Logout";
import { AuthContext } from "../context/AuthContext";

const ToggleLogin = () => {
  const { isLoggedIn } = useContext(AuthContext); // Calling Context - { } is the object destructuring
  
  // console.log("Logged In:", isLoggedIn);
  
  return <>{isLoggedIn ? <Logout /> : <Login />}</>;
};

export default ToggleLogin;
