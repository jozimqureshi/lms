import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>

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
