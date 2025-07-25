import { generateObjectId } from "../../utils/generateObjectId.js";
import { getIDs } from "./getIDs.js";

const examId = getIDs.examId;
const examId_2 = getIDs.examId_2;
const teacherId = getIDs.teacherId;
const teacherId_2 = getIDs.teacherId_2;

export const allExams = [
  // teacher_1:
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
