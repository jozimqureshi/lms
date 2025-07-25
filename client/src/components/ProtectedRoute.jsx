// This file is to authenticate the whole App.jsx; if user aren't login they should not allowed exams and inner exam related components else go to children smoothly.

import React from 'react'
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {

const isAuthenticated = localStorage.getItem('username');
(isAuthenticated) ? children : <Navigate to = {'/'} replace />;  
}

export default ProtectedRoute
