import { allTeachers } from "../data/mocks/teachers";
import { provision } from "../data/mocks/loginCredentials";

export const mockCredential = provision;

function auth({ username, password }) {
  return (
    allTeachers.find(
      (data) => data.username === username && data.password === password
    ) || ""
  );
}

export function loginHandler({ username, password }, navigate) {
  const data = auth({ username, password });

  if (data) {
    const username = data.username;
    const loginId = data.id; // Temporarily storing loginID in localStorage to level up to Context in near future

    localStorage.setItem('username', username);
    localStorage.setItem('loginId', loginId);
    navigate("/view-exams");
  } else {
    navigate("/");
  }
}
