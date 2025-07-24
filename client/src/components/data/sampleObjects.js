import generateObjectId from "../../utils/generateObjectId.js";

const teacherId = generateObjectId();
const teacherId_2 = generateObjectId();
const examId = generateObjectId();

export const allExams = [
  {
    id: examId,
    examName: "Database Management",
    examType: "Mid Term",
    teacherId, // FK -> ES 6 Shortcut of teacherId : teacherId
  },
  {
    id: examId,
    examName: "Artifical Intelligence",
    examType: "Mid Term",
    teacherId, // FK
  },
  {
    id: examId,
    examName: "Data Science",
    examType: "Final Term",
    teacherId, // FK
  },
  {
    id: examId,
    examName: "Machine Learning",
    examType: "Final Term",
    teacherId, // FK
  },

  {
    id: generateObjectId(),
    examName: "Computer Networks",
    examType: "Mid Term",
    teacherId: "teacherId_2",
  },
  {
    id: generateObjectId(),
    examName: "Operating Systems",
    examType: "Mid Term",
    teacherId: "teacherId_2",
  },
  {
    id: generateObjectId(),
    examName: "Cyber Security",
    examType: "Final Term",
    teacherId: "teacherId_2",
  },
  {
    id: generateObjectId(),
    examName: "Cloud Computing",
    examType: "Final Term",
    teacherId: "teacherId_2",
  },
];

export const teacher = [
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
    password: "abc123",
    qualification: "PhD Artificial Intelligence",
  },
];
