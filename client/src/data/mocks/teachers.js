const teacherId = localStorage.getItem("teacherId") || '';
const teacherId_2 = localStorage.getItem("teacherId_2") || '';

export const allTeachers = [
  {
    id: teacherId, // Keeps same to use in allExams
    name: "Dr Hussain Shah",
    email: "hussain.shah@maju.edu.org",
    password: "abc123",
    qualification: "PhD Data Science",
  },
  {
    id: teacherId_2,
    name: "Dr Sumbul Iftikhar",
    email: "hussain.shah@maju.edu.org",
    password: "987xyz",
    qualification: "PhD Artificial Intelligence",
  },
];