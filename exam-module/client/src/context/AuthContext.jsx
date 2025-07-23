import { React, createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => !!localStorage.getItem('username'));

  useEffect(() => {
    const handleStorage = () => {
      setIsLoggedIn(!!localStorage.getItem('username'));
    };

    window.addEventListener("storage", handleStorage);

    return () => window.removeEventListener("storage", handleStorage);
    
}, []);

  return (
    <>
      <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
        {children}
      </AuthContext.Provider>
    </>
  );
}

export default AuthProvider
