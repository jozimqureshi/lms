import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import generateObjectId from "../utils/generateObjectId";

const allExams = [
  {
    id: generateObjectId(),
    examName: "Database Management",
    examType: "Mid Term",
  },
  {
    id: generateObjectId(),
    examName: "Artifical Intelligence",
    examType: "Mid Term",
  },
  {
    id: generateObjectId(),
    examName: "Data Science",
    examType: "Final Term",
  },
  {
    id: generateObjectId(),
    examName: "Machine Learning",
    examType: "Final Term",
  },
];

const AllFetchedViewExams = (props) => {
  // const examId = props.selectedExamId;
  const selectedExamType = props.selectedExamType;
  const isAll = props.isAllSelected;
  const title = isAll ? "All" : selectedExamType;
  const examType = isAll
    ? [...new Set(allExams.map((exam) => exam.examType))]
    : selectedExamType;

  const navigate = useNavigate();

  const handleExam = (id) => {
    setStateExamId(id);
    navigate("exam", { eIdByNavigate: id }); // Relative vs. Absolute path navigation -> For ViewExam/Exam, use exam and /exam for jumping to full route or outside the current navigation then it'll open /Exam only // Passing 2 arguments, path and object to navigate(path, object) function.
  };

  return (
    <>
      <h4>{title} Exams:</h4>
      <ul className="list-unstyled">
        {allExams
          .filter((exam) =>
            Array.isArray(examType)
              ? examType.includes(exam.examType)
              : exam.examType === examType
          )
          .map((exam) => (
            <li key={exam.id}>
              <a
                className="nav-link link-underline-hover cursor-pointer"
                onClick={() => {handleExam(exam.id)}} // handleExam is within anonymous arrow because calling handleExam directly without embedding will call: handleExam on render time before actual click...
              >
                {exam.examName}
                {isAll && " (" + exam.examType + ")"}
              </a>
            </li>
          ))}
      </ul>
    </>
  );
};

export default AllFetchedViewExams;
