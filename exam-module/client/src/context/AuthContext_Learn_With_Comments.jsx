import { React, useState, useEffect, useContext, createContext } from "react";

// Step 1:
// -------

// Create object AuthContex...

export const AuthContext = createContext(); // AuthContext is the Object name

/*
* .js FILE EXTENSION NAME:
--------------------------
You can set the file extension of AuthContext as .js instead of .jsx but that'll make confusion. But it's allowed in modern React Platform.

* useContext(PassSomethingOrNot):
---------------------------------
We don't pass any value in useContext() because it accepts only fallback (default) values as const AuthContext = createContext({ isLoggedIn: false, setIsLoggedIn: () => {} });
That's usually already done by Provider. Set fallback values if Provider is missing
AuthContext is the object returned.
It has a Provider and a Consumer, but nowadays, with Function Components, we use the Provider and useContext() (instead of Consumer). Use Consumer for Legacy.

* NAMING CONVENTION:
--------------------
Below is the component named AuthProvider.
Why don't we name the component as AuthContext rather than AuthProvider
const AuthProvider = () => {
What if we create the object by something else name and remain the component name as it is by default
Item: createContext() result -> What it is: The object that holds the Context -> Typical Name: AuthContext
Item: The component	 -> What it is: The Provider that wraps children -> Typical Name: AuthProvider
Why we don’t name the component AuthContext:
Because it doesn’t hold the context, it wraps components and provides values to them.
It's better to keep names expressive.
What if we rename them?
Technically you can do this:

const XYZ = createContext();
const Something = ({ children }) => (
  <XYZ.Provider value={{ ... }}>
    {children}
  </XYZ.Provider>
);

This will still work.
But it becomes confusing to future developers (or yourself after sometime).

* So Naming Best Practices:
---------------------------
Name AuthContext -> The object that you use in useContext()
Name AuthProvider -> The component that wraps and provides it
It’s clean, conventional, and clearly separates concerns:
One is the Context object
One is the Provider component
*/

// *** Step 2 ***
// --------------

// Initializing...

const AuthProvider = ({ children }) => {
  /*
  * children:
  -----------
  Declares a component that wraps other components (that’s why it receives children).
  children means anything inside <AuthProvider>...</AuthProvider>
  OR
  This is a wrapper component It receives any nested components via children
  It provides the login data to all of them via AuthContext
  Provider Children represents any nested components inside the wrapper.
  React passes them automatically.
  */

  // *** Step 4 ***
  // --------------

  // Initializing State...

  const [isLoggedIn, setIsLoggedIn] = useState(
    () => !!localStorage.getItem("username")
  );

  /*
  * Why Lazy useState?
  --------------------
  Because on Eager execution, this will always evaluate the localStorage.getItem(...) expression, even though React will only use it during the first mount — wasteful!
  
  * !!:
  -----
  The Double Bang (informally) or Double Negation !! is the inverter operator that returns only boolean (not just falsy) and allows to save pure boolean value instead of any.
  Example: let val = localStorage.getItem('username'); --> It'll save null or string value instead of boolean although using it with loop/if/conditional statements, it'll return falsy or truly output while checking like if(localStorage.getItem('username')) --> Will return falsy or truly value but when it'll be used to store value in a variable, it'll give the actual value isntead of boolean.
  So !! Provides true / false value to further save it, not to jsut check.
  So the Double Bang means: let val = (localStorage.getItem('username') != "") ? true : false

  * Arrow Function Wrapping -> Lazy Init:
  ---------------------------------------
  Some Hooks including useState allows lazy init by accepting arrow wrapped code to run only first time or conditionally and to avoid repeating render with no need.
  Lazy init: runs only once at initial render
  Avoids re-reading localStorage on every render
  Some hooks like useReducer explicitly asks init argument as: const [state, dispatch] = useReducer(reducer, 0, init);
  So here if init is provided, it'll behave lazy.
  When to use what:
  Eager -> On every render -> Value is cheap, no side effects
  Lazy -> Only once at initial render -> Value is expensive or should run once only
  Default -> It is usually Eager or depends on code. -> Use if Value is static, simple

  * Why we don’t use setIsLoggedIn(...) here:
  -------------------------------------------
  Because useState already sets the value for you.
  You're initializing state here, not updating it later. So:
  useState(value) sets the initial state
  You cannot call setIsLoggedIn() inside useState() — it would cause a render loop
  setIsLoggedIn(...) inside useEffect() or event handler instead.
  In Initial state setup: useState(() => Boolean(...))
  In Reactive state update later: setIsLoggedIn(Boolean(...))
  */
  
    // *** Step 5 ***
    // --------------

    // useEffect() to listen state change of Login/Logout from outside window/tab...

    useEffect(() => { // -> The Mount / Deps changing / Side Effects Portion
      /*
      try {} catch {} -> The Error Handling Block
      */

      /*
      * Why not const useEffect = useEffect();
      ----------------------------------------
      We directly call the useEffect() function without storing in a varialbe just like navigate = useNavigate() because useEffect doesn't return anything to store it further and it's just an argument function.
      */
      
      const handleStorage = () => {
            setIsLoggedIn(!!localStorage.getItem('username'));
        };

        /*
        * Why we use setIsLoggedIn(...) here:
        -------------------------------------
        Because now you're changing state reactively based on an event (like storage update or manual check).
        You’re saying:
        “Hey React, re-evaluate this Boolean(...) and update the state accordingly.”
        */

        window.addEventListener("storage", handleStorage); // Side Effect

        /*
        * handleStorage vs handleStorage():
        -----------------------------------
        It's Same as of Lazy vs Eeger Init in Javascript

        * Applying to:
        --------------
        setTimeout(myFn, 1000) vs setTimeout(myFn(), 1000)
        onClick={handleClick} vs onClick={handleClick()} in React
        useEffect(() => doSomething) vs useEffect(() => doSomething())

        Lazy = "Do this when you're told"
        Doesn't run handleStorage immediately.
        Just tells the browser: “Here’s what to do when the storage event happens.”
        
        Eager = "Do this now, even if it's not needed later"
        Executes handleStorage() right now, and whatever it returns is passed (often undefined).
        Useless in event listeners, since the browser needs a function, not a result.
        */

        return () => window.removeEventListener(storage, handleStorage); // -> return: The Unmount / Cleanup Portion

        /*
        Here arrow function is for Lazy again...

        * return:
        ---------
        The return inside useEffect is used to define a cleanup function.
        This function runs automatically when:
        The component unmounts, OR
        The dependencies change (in the dependency array)

        * Omitting return:
        -----------------
        This runs only once on mount. No return = no cleanup = totally valid.
        Nothing breaks.
        You only need return when you need to clean up something — such as:
        Use Case needing return
        Clearing intervals / timeouts
        Removing event listeners
        Cancelling fetch / abort controller
        Resetting animation, WebSocket, etc.

        * If forget to clean up?
        ------------------------
        You may cause:
        Memory leaks
        Duplicate event listeners
        Timers running in background
        Unexpected re-renders
         */
    }, []); // -> The Update Portion...

    /*
    * Purpose of useEffect():
    -------------------------
    It's used for all Side Effects.
    A side effect is any code that affects something outside of the component’s rendering process.
    When your component does something besides just returning JSX, like:
    Fetching data from an API
    Reading/writing to localStorage
    Listening to events (scroll, resize, storage)
    Cleaning up when the component is removed
    Running timers or animations
    Syncing with context or props changes

    All of these are side effects — they don't belong in the render phase, because they can:

    Slow down rendering
    Cause bugs if repeated
    Leak memory if not cleaned up
    Happen out of sync with React's update system

    * Why useEffect?
    ----------------
    useEffect() is the dedicated place to run side effects — it ensures they:

    Run after the component is on screen
    React to changes in state/props only when needed (via dependencies)
    Get cleaned up automatically if you return a cleanup function
    It's also the modern way of Life Cycle including Mounting, Updating, Unmounting, Error Handling during Render or Life Cycle using Functional Components.

    * [] - The Deps:
    ----------------
    [] is the Dependeny Array (Deps) Parameter.
    It tells React: run this effect only once, when the component mounts.
    It will not re-run on re-renders or when props/state change.

    * When to use Debs:
    -------------------
    You use [] when:
    You want to set up something once, like:
    Event listeners (like your example)
    API calls on first render
    WebSocket connection
    setInterval, setTimeout, etc.
    
    * Empty means []:
    -----------------
    Runs the effect only once, when the component first mounts (i.e., on first render).
    It will never run again, no matter what changes in state or props.
    When to use:
    Fetching initial data once
    Reading from localStorage on app start
    Setting up event listeners (e.g. window.addEventListener)
    Initializing 3rd-party libraries
    For all the above cases, [] runs just once when component mounts — no reactivity to state after that.

    * Without [] or Omitting it entirely:
    -------------------------------------
    Not writing [] at all is bad for most use cases like listeners, API calls, or subscriptions, because it means:
    "Run this useEffect() on every render."
    So, must pass empty [] if nothing needed, otherwise, if you leave it out, the effect runs on every render (which is bad for listeners and API calls).

    * [val] With Dependencies:
    --------------------------
    Runs the effect whenever val changes
    Also runs once on mount (like []) — but then runs again every time val updates.
    
    * When to use:
    --------------
    Trigger something in response to a state or prop change
    Reacting to a login status, theme toggle, form input, etc.
*/

  return (
    <>
      {/*
        *** Step 3 ***
        --------------
        
        value props...
        */}

      <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        {children}
      </AuthContext.Provider>

      {/*
      * return vs return():
      ---------------------
      return is simple JS but return() is JSX, or multi-line expressions
      Why parentheses?
      JSX is not real HTML, it's syntactic sugar for React.createElement(), so it's technically an expression.
      The parentheses help in 2 ways:
      Multiline readability: Helps write clean, indented JSX.
      Avoid automatic semicolon insertion (ASI) bug:

      return
      <div>Hello</div>;
      // React returns undefined!
      
      So we use:

      return (
      <div>Hello</div>
      );

      * value="{{ isLoggedIn, setIsLoggedIn }}":
      ------------------------------------------
      Passing value props and wrapping all components you want to give access to isLoggedIn, setIsLoggedIn:

      The value prop is how you pass shared data to all consumers of the context.
      This makes isLoggedIn and setIsLoggedIn available to any child component that does:
      const { isLoggedIn } = useContext(AuthContext);

      * What happens if you omit value?
      ---------------------------------
      <AuthContext.Provider> // No value provided
      Now if you try:
      const auth = useContext(AuthContext);
      console.log(auth); // undefined
      Because nothing was passed, the consumer just receives undefined.
      So, Context still technically works — but it's empty.
      The value prop is required for context to carry meaning.
      React won’t throw an error, but your consumers will get undefined, leading to bugs like:
      auth.isLoggedIn  // TypeError: Cannot read properties of undefined
      You must provide value={...} — even if it’s just a placeholder like:
      value={null}
      But for real apps, always pass meaningful state/data.
      */}
    </>
  );
};

export default AuthProvider;
