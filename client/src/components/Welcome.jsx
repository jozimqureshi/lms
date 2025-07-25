import React, { useContext } from "react";

import LoginButton from "./LoginButton";
import { AuthContext } from '../context/AuthContext';

// Logic for: Get Teeacher Name...
const teacher = {
    name : 'Dummy Name',
};

const Welcome = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <>
      <div className="row d-flex justify-content-center">
        <div className="col-7 text-center">
          {!isLoggedIn ? <LoginButton /> : <h5>Welcome {teacher.name}!</h5> /* Slicing */}
        </div>
      </div>
    </>
  );
};

export default Welcome;
