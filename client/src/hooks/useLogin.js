// Custom Hook to reuse Login Funcionality.
// Use .js extension for non-component js files.
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { mockCredential as provision, loginHandler } from "../services/login.js";
import { AuthContext } from "../context/AuthContext.jsx";

export const useLogin = () => {
    const navigate = useNavigate();
    const { setIsLoggedIn } = useContext(AuthContext);

    const performLogin = () => {
        loginHandler(provision(), navigate);
        setIsLoggedIn(true); // It's same as literal vs premitive variable
        // setIsLoggedIn() is the reference of actual object created within AuthContext.
        // The above wording is written by myself for example purpose but actually:
        // setIsLoggedIn(true) updates the actual shared Context state.
        // It's not just a local variable — it reflects globally, and all components consuming AuthContext update accordingly.
    }

    return { performLogin }; // same as { performLogin : performLogin }
}