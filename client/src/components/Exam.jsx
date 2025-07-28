import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// import { allExams } from "../services/getAllExams"; // That was returning static data and was not updating on run time. 
// Only 1st record was showing on selecting any exam type -> exam like Final -> Maching Language 
// -> Showing wrongly Mid Term/ Database Management.

import { getExamById } from '../services/getExamById'; // To fetch real time data using useEffect and useState

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

  const [exam, setExam] = useState(null);

  useEffect(() => {
    if (examId) {
      getExamById(examId)
        .then((data) => setExam(data))
        .catch((err) => console.error("Error fetching exam", err));
    }
  }, [examId]);

  if (!examId) return <p>No exam selected. Please go back.</p>;
  if (!exam) return <p>Loading exam data...</p>;

  //   console.log("Exam component rendered");
  //   console.log("location.state:", location.state);
  //   console.log("examId:", examId);

  /* // Removing old static data fetching...
  const objExam = allExams.find((obj) => obj.id === examId);

  const {examType, examName} = objExam.examType; */

  const {examType, examName} = exam;

  // console.log(`Exam.jsx -> examId = `, examId);
  // console.log(`Exam.jsx -> objExam = `, examType);
  // console.log(`Exam.jsx -> examName = `, examName);

  const clickHandler = () => {
    navigate(`/view-exams?type=${examType}`); // Query String or URL Query Parameters
    // React Router gives you:
    // useSearchParams() to read and write query strings
  };

  const escChar = '<- '; // JSX has no direct Esc Char.

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
                {escChar}Back
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
