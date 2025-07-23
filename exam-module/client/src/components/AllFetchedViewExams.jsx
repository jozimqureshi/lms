import React from "react";
import { useNavigate } from "react-router-dom";

import { allExams } from "./data/sampleObjects.js";

const AllFetchedViewExams = (props) => {
  // const [searchParams] = useSearchParams(); // React uss useSearchParams to work with Query Strings
  // const typeQueryString = searchParams.get(type); // Fetching Query String from URL

  // const examId = props.selectedExamId;
  const selectedExamType = props.selectedExamType;
  const isAll = props.isAllSelected;
  const title = isAll ? "All" : selectedExamType;
  const examType = isAll
    ? [...new Set(allExams.map((exam) => exam.examType))]
    : selectedExamType;

  const navigate = useNavigate();

  const handleExam = (id) => {
    // setStateExamId(id); // I'ts declared but didn't passed through props. So eithe pass via props in ViewExams.jsx or skip it to avoid blank white page...

    navigate("exam", { state: { eIdByNavigate: id } });
    // exam vs /exam -> Relative vs. Absolute path navigation -> For ViewExam/Exam, use exam and /exam for jumping to full route or outside the current navigation then it'll open /Exam only // Passing 2 arguments, path and object to navigate(path, object) function.
    // Here state : { obj } is called State Component and is different from useState.
    // It's a way to pass temporary data between pages (routes) without using URL or Context.
    // navigate("/target-route", {
    //   state: { obj },
    // });
    // You're saying:
    // “Go to /target-route, and carry along this obj as hidden temporary data.”
    // How It's Used
    // Let’s say you have this object:
    // const obj = {
    //   examId: "123",
    //   examType: "Mid Term",
    // };
    // And you navigate like this:
    // navigate("/exam-details", { state: { obj } });
    // Then in ExamDetails.jsx (the target component), you read it like this:
    // import { useLocation } from "react-router-dom";
    // const location = useLocation();
    // const obj = location.state?.obj;
    // Now obj.examId and obj.examType are available to use in the new page.

    // state : { *** } is necessary because this key is recognized by React Router as the special key for storing extra data during navigation.
    // Here's how it works internally:
    // navigate("/exam", {
    //   state: { selectedExamId: "abc123" }, // ✅ React Router will store this in location.state
    //   replace: false, // optional
    // });
    // Then you can retrieve it in your target component via:
    // const location = useLocation();
    // console.log(location.state.selectedExamId);
    // If you pass:
    // navigate("exam", { eId: id });
    // ❌ React Router will ignore this. It doesn’t know what “eId” is.
  };

  return (
    <>
      <h4 className="mt-2">{title} Exams:</h4>
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
                onClick={() => handleExam(exam.id)} // Wrapping handleExam in an arrow function prevents it from running immediately during render; it will only be called when the user actually clicks.
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
