import { allTeachers } from "../data/mocks/teachers";
import { provision } from "../data/mocks/loginCredentials";

export const mockCredential = provision;

function auth({ username, password }) {
  // console.log(`auth -> username = ${username}, password = ${password}`);
  
  return (
    allTeachers.find(
      (data) => data.email === username && data.password === password
    ) || ""
  );
}

export function loginHandler({ username, password }, navigate) {
  const data = auth({ username, password });

  if (data) {
    const username = data.email;
    const loginId = data.id; // Temporarily storing loginID in localStorage to level up to Context in near future
    const teacherName = data.name;

    localStorage.setItem('username', username);
    localStorage.setItem('loginId', loginId);
    localStorage.setItem('teacherName', teacherName);

    // console.log(`data.email = `, data.email);
    // console.log(`true, username = ${username}, loginId = ${loginId}`);

    navigate("/view-exams");
  } else {

    // console.log(`false, username = ${username}, loginId = ${loginId}`);

    navigate("/");
  }
}
