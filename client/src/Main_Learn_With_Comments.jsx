import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AuthProvider from "./context/AuthContext"; // Imported one time only. Then everywhere it's AuthContext instead of AuthProvider - Contrary to ordinary components:

/*
We import **AuthProvider** once in your root (like index.js or App.js) — to wrap your app and provide context.
Whilst, we import **AuthContext** in any child component (like Login, Logout, etc.) — to consume or read/write the shared context value using useContext().

1. AuthProvider = The Wrapper:

<AuthProvider>
  <App />
</AuthProvider>

It creates and provides the shared data (isLoggedIn, setIsLoggedIn).
Think of it like a Wi-Fi router: it sets up the signal but doesn't use the internet itself.
You only need to import it where you're wrapping the app.

import AuthProvider from "./context/AuthProvider";

2. AuthContext = The Access Point:

Used wherever you want to access context data:

const { isLoggedIn } = useContext(AuthContext);

You import AuthContext in:

Login.js
Logout.js
LoginPanel.js
Any file where you want to read or update the login state.

import { AuthContext } from "../context/AuthProvider";

Why Not Just Import AuthProvider?

Because AuthProvider is just a React component that uses the real context internally. The actual shared data (context) is stored in AuthContext, not AuthProvider.
AuthProvider provides
AuthContext is the source
useContext(AuthContext) lets you consume the provided values
*/

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>

  // <AuthProvider>:
  // You're wrapping your entire app (<App />) with a Context Provider component (<AuthProvider>), so that authentication state (isLoggedIn, setIsLoggedIn) is available to all child components inside <App />.

  // What's Happening Behind the Scenes
  // <AuthProvider> is a custom React component that internally uses:

  // <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
  //   {children}
  // </AuthContext.Provider>

  // So, App becomes children, and it gets wrapped in AuthContext.Provider.
  // This enables all components inside App (deeply nested or not) to use:

  // const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  // You're saying:
  // “I want the entire application to know whether the user is logged in or not — and let any part log in or log out — without prop drilling.”

  // <StrictMode></StrictMode> is necessary for useEffect() to Checks for side effects
  // React <StrictMode> intentionally double-invokes certain functions like:
  // useEffect(() => {
  //   // side effect here
  //   return () => {
  //     // cleanup
  //   };
  // }, []);
  // This happens only in development to test:
  // Is the effect safe if run twice?
  // Does it clean up properly?
  // Is it idempotent? (Same result every time)
  // Example:
  // useEffect(() => {
  //   console.log("Effect runs");
  //   const timer = setInterval(() => {
  //     console.log("Tick");
  //   }, 1000);
  //   return () => clearInterval(timer); // cleanup
  // }, []);
  // In StrictMode, this will run the effect twice — once for mounting, and once for unmounting → to check cleanup.
  // If you forget the clearInterval, the second call might cause multiple timers → a bug in real apps.
);
