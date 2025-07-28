import React, { useContext, useEffect, useState } from "react";

import LoginButton from "./LoginButton";
import { AuthContext } from '../context/AuthContext';

const Welcome = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const [teacherName, setTeacherName] = useState(); // Store the teacher's name reactively to display after login

  // When login status changes, update the local teacherName from localStorage.
  // This ensures the Welcome message shows the correct name after login or logout,
  // because reading localStorage outside the component doesn't react to state changes.

  useEffect(() => {
    if (isLoggedIn) {
      const nameFromStorage = localStorage.getItem('teacherName');
      setTeacherName(nameFromStorage || '');
    } else {
      setTeacherName('');
    }
  }, [isLoggedIn]);

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
