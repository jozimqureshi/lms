import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AuthProvider from "./context/AuthContext"; 

createRoot(document.getElementById("root")).render(
  <StrictMode> {/* React development-only mode: catches side effect bugs & warnings */}
    <BrowserRouter> {/* Enables client-side routing using React Router */} 
      <AuthProvider> {/* Global Auth Context Provider using React Context API */} 
        <App /> {/* Root application component */} 
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
