// This file is to authenticate the whole App.jsx; if user aren't login they should not allowed exams and inner exam related components else go to children smoothly.

import React from 'react'
import { Navigate } from "react-router-dom";

// children is a special prop automatically passed to every component — it represents whatever you wrap inside that component in JSX.
// <ProtectedRoute>
//   <ViewExams />
// </ProtectedRoute>
// So in below code, hildren = <ViewExams /> (or anything else wrapped inside <ProtectedRoute>)
// children is just a normal React node — can be a component, element, string, etc.
// What is Children (with capital C)?
// Children is a utility object from React used for working with props.children.
// Exampple:
// import React from "react";
// React.Children.map(children, child => {
//   // manipulate children safely
// });
// You use React.Children only when you need to:
// Map/filter/clone multiple children
// Validate children
// Count them, etc.

const ProtectedRoute = ({ children }) => {
//   return (
//     <>
      
//     </>
//   )

// Why <></> (React Fragments) Are Not Needed Here
// Fragments <></> are only needed when you’re returning multiple sibling JSX elements without a wrapper.
// But here:
// return isAuthenticated ? children : <Navigate to="/" replace />;
// You're returning just one element, either:
// children → a single JSX node like <ViewExams />, or
// <Navigate /> → also a single JSX node
// So no fragment (<>...</>) is necessary.
// ✅ Why return Is Present (Not Missing)
// You are using return:
// return isAuthenticated ? children : <Navigate to="/" replace />;
// It’s a ternary expression, which is equivalent to:
// if (isAuthenticated) {
//   return children;
// } else {
//   return <Navigate to="/" replace />;
// }
// So nothing is missing — the return is just compact using ternary syntax.
// When Would You Need <></> or Explicit Multi-line JSX?
// If you had something like:
// return (
//   <>
//     <Header />
//     {isAuthenticated ? children : <Navigate to="/" replace />}
//   </>
// );
// Now you're returning multiple siblings, so you’d use a fragment.

const isAuthenticated = localStorage.getItem('username');
(isAuthenticated) ? children : <Navigate to = {'/'} replace />;  
}

export default ProtectedRoute
