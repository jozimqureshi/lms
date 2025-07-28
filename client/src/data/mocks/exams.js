import { generateObjectId } from "../../utils/generateObjectId";

const teacherId = localStorage.getItem("teacherId") || '';
const teacherId_2 = localStorage.getItem("teacherId_2") || '';

export const allExams = [
  // teacher_1:
  {
    id: generateObjectId(),
    examName: "Database Management",
    examType: "Mid Term",
    teacherId, // FK -> ES 6 Shortcut of teacherId : teacherId
  },
  {
    id: generateObjectId(),
    examName: "Artifical Intelligence",
    examType: "Mid Term",
    teacherId, // FK
  },
  {
    id: generateObjectId(),
    examName: "Data Science",
    examType: "Final Term",
    teacherId, // FK
  },
  {
    id: generateObjectId(),
    examName: "Machine Learning",
    examType: "Final Term",
    teacherId, // FK
  },
  // teacher_2:
  {
    id: generateObjectId(),
    examName: "Computer Networks",
    examType: "Mid Term (2)",
    teacherId: "teacherId_2",
  },
  {
    id: generateObjectId(),
    examName: "Operating Systems",
    examType: "Mid Term (2)",
    teacherId: "teacherId_2",
  },
  {
    id: generateObjectId(),
    examName: "Cyber Security",
    examType: "Final Term (2)",
    teacherId: "teacherId_2",
  },
  {
    id: generateObjectId(),
    examName: "Cloud Computing",
    examType: "Final Term (2)",
    teacherId: "teacherId_2",
  },
];
