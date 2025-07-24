export function logoutHandler(e, navigate) {
  e.preventDefault(); // stops anchor jump
  localStorage.removeItem("username");
  navigate("/");
}
