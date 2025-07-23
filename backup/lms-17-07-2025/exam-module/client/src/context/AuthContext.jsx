import { React, useState, useEffect, useContext } from "react";

// Step 1:
// -------

// Create object AuthContext:

export const AuthContext = useContext(); // AuthContext is the Object name

//.js FILE EXTENSION NAME:
// You can set the file extension of AuthContext as .js instead of .jsx but that'll make confusion. But it's allowed in modern React Platform.

// useContext():
// We don't pass any value in useContext() because it accepts only fallback (default) values as const AuthContext = createContext({ isLoggedIn: false, setIsLoggedIn: () => {} });
// That's usually already done by Provider. Set fallback values if Provider is missing
// AuthContext is the object returned.
// It has a Provider and a Consumer, but nowadays, with Function Components, we use the Provider and useContext() (instead of Consumer). Use Consumer for Legacy.

// NAMING CONVENTION TOPIC:

// Below is the component named AuthProvider.
// Why don't we name the component as AuthContext rather than AuthProvider
// const AuthProvider = () => {
// What if we create the object by something else name and remain the component name as it is by default
// Item: createContext() result -> What it is: The object that holds the Context -> Typical Name: AuthContext
// Item: The component	 -> What it is: The Provider that wraps children -> Typical Name: AuthProvider
// Why we don’t name the component AuthContext:
// Because it doesn’t hold the context, it wraps components and provides values to them.
// It's better to keep names expressive.
// What if we rename them?
// Technically you can do this:
// const XYZ = createContext();
// const Something = ({ children }) => (
//   <XYZ.Provider value={{ /* ... */ }}>
//     {children}
//   </XYZ.Provider>
// );
// This will still work.
// But it becomes confusing to future developers (or yourself after sometime).
// So Naming Best Practices:
// Name AuthContext -> The object that you use in useContext()
// Name AuthProvider -> The component that wraps and provides it
// It’s clean, conventional, and clearly separates concerns:
// One is the Context object
// One is the Provider component

// Step 2:
// -------

// Initializing:

const AuthProvider = ({ children }) => {
  // children:
  // Declares a component that wraps other components (that’s why it receives children).
  // children means anything inside <AuthProvider>...</AuthProvider>
  // OR
  // This is a wrapper component It receives any nested components via children
  // It provides the login data to all of them via AuthContext
  // Provider Children represents any nested components inside the wrapper.
  // React passes them automatically.

  // Step 4:
  // -------

  // Initializing State:

  const [isLoggedIn, setIsLoggedIn] = useState(
    () => !!localStorage.getItem("username")
  );

  // Covered topics:

  // 1) The Double Bang (informally) or Double Negation !!:

  // !! is the inverter operator that returns only boolean (not just falsy) and allows to save pure boolean value instead of any.
  // Example: let val = localStorage.getItem('username'); --> It'll save null or string value instead of boolean although using it with loop/if/conditional statements, it'll return falsy or truly output while checking like if(localStorage.getItem('username')) --> Will return falsy or truly value but when it'll be used to store value in a variable, it'll give the actual value isntead of boolean.
  // So !! Provides true / false value to further save it, not to jsut check.
  // So the Double Bang means: let val = (localStorage.getItem('username') != "") ? true : false

  // 2) Arrow Function Wrapping -> Lazy Init:

  // Some Hooks including useState allows lazy init by accepting arrow wrapped code to run only first time or conditionally and to avoid repeating render with no need.
  // Lazy init: runs only once at initial render
  // Avoids re-reading localStorage on every render
  // Some hooks like useReducer explicitly asks init argument as: const [state, dispatch] = useReducer(reducer, 0, init);
  // So here if init is provided, it'll behave lazy.
  // When to use what:
  // Eager -> On every render -> Value is cheap, no side effects
  // Lazy -> Only once at initial render -> Value is expensive or should run once only
  // Default -> It is usually Eager or depends on code. -> Use if Value is static, simple

  // 3) Why we don’t use setIsLoggedIn(...) here:

  // Because useState already sets the value for you.
  // You're initializing state here, not updating it later. So:
  // useState(value) sets the initial state
  // You cannot call setIsLoggedIn() inside useState() — it would cause a render loop
  // setIsLoggedIn(...) inside useEffect() or event handler instead.
  // Sp:
  // In Initial state setup: useState(() => Boolean(...))
  // In Reactive state update later: setIsLoggedIn(Boolean(...))

  // $$ -> Move it to useEffect:
  // Inside useEffect() or event handler:
  // Why we use setIsLoggedIn(...) here:
  // Because now you're changing state reactively based on an event (like storage update or manual check).
  // You’re saying:
  // “Hey React, re-evaluate this Boolean(...) and update the state accordingly.”

  return (
    <>
      {/*
        This is component UI portion. Here all children will be passed in.
      */}

      {/*
        Step 5:
        -------

        useEffect() to listen any :
      */}

      {/*
        Step 3:
        -------
        
        value props:

        Passing value props and wrapping all components you want to give access to isLoggedIn, setIsLoggedIn:

        The value prop is how you pass shared data to all consumers of the context.
        This makes isLoggedIn and setIsLoggedIn available to any child component that does:
        const { isLoggedIn } = useContext(AuthContext);
        What happens if you omit value?
        <AuthContext.Provider> // ❌ No value provided
        Now if you try:
        const auth = useContext(AuthContext);
        console.log(auth); // undefined
        Because nothing was passed, the consumer just receives undefined.
        So, Context still technically works — but it's empty.
        The value prop is required for context to carry meaning.
        React won’t throw an error, but your consumers will get undefined, leading to bugs like:
        auth.isLoggedIn  // ❌ TypeError: Cannot read properties of undefined
        You must provide value={...} — even if it’s just a placeholder like:
        value={null}
        But for real apps, always pass meaningful state/data.
        */}

      <AuthContext.Provider value="{{ isLoggedIn, setIsLoggedIn }}">
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
