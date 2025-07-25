import React, { useContext } from "react";

import LoginButton from "./LoginButton";
import { AuthContext } from '../context/AuthContext';

const Welcome = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const teacherName = localStorage.getItem('teacherName');

  return (
    <>
      <div className="row d-flex justify-content-center">
        <div className="col-7 text-center">
          {!isLoggedIn ? <LoginButton /> : <h5>Welcome {teacherName}!</h5> /* Slicing */}
        </div>
      </div>
    </>
  );
};

export default Welcome;
