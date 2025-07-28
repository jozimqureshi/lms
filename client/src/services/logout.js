export function logoutHandler(e, navigate) {
  e.preventDefault(); // stops anchor jump
  
  localStorage.removeItem("teacherName");
  localStorage.removeItem("loginId");
  localStorage.removeItem("username");

  navigate("/");
}
