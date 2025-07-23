import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { allExams } from "./data/sampleObjects";

const Exam = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const examId = location.state?.eIdByNavigate; // Can't be directly useLocation().eIdByNavigate
  // If you navigate directly to /exam via browser reload, then location.state will be undefined, and this will crash with:
  // ❌ Cannot read properties of undefined (reading 'selectedexamId')
  // ? is the safe way.
  // This uses optional chaining (?.) to prevent crash if state is missing:
  // Useful when users hit a route directly (e.g., bookmark /exam or paste URL).
  // Helps avoid runtime errors and blank screens.
  if (!examId) return <p>No exam selected. Please go back.</p>;

  //   console.log("Exam component rendered");
  //   console.log("location.state:", location.state);
  //   console.log("examId:", examId);

  const objExam = allExams.find((obj) => obj.id === examId);
  const examType = objExam.examType;
  const examName = objExam.examName;

  const clickHandler = () => {
    navigate(`/view-exams?type=${examType}`); // Query String or URL Query Parameters
    // React Router gives you:
    // useSearchParams() to read and write query strings
  };

  return (
    <>
      {examId ? (
        <div className="row">
          <div className="col text-center overflow-auto">
            <h4 className="text-center">
                {/* {examType} / {examName} */}
              <a className="cursor-pointer link-underline-none link-underline-hover" onClick={clickHandler}>
                {/* We can't call event function with () like func() in JSX. Instead use only name to call as: func --- without () brackets */}
                {examType}
              </a>
               / {examName}
            </h4>
            {/* <div><br /></div> */}
            <div className="mt-1">
              <a className="cursor-pointer link-underline-none link-underline-hover" onClick={() => navigate(-1)}>
                Back
              </a>
            </div>
          </div>
        </div>
      ) : (
        <p>No Exam ID received. Please go through proper flow.</p>
      )}
    </>
  );
};

export default Exam;
