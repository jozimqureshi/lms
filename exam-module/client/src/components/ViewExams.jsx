import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import ChooseExamTypes from "./ChooseExamTypes";
import Exam from "./Exam";

const ViewExams = (props) => {
  // const [stateExamId, setStateExamId] = useState(null);

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col text-center overflow-auto">
            <h4>Exam Module</h4>
          </div>
        </div>
        {/* Routing  */}
        <Routes>
          <Route index element={<ChooseExamTypes />} />
          <Route path="/exam" element={<Exam />} />
        </Routes>
        {/* The index prop defines the default child route for a parent route in
        React Router v6+. In the above case: When user visits /view-exams, they
        see ChooseExamTypes When user visits /view-exams/exam, they see Exam
        index means: this is the default child route when the parent path is
        matched exactly Without index, you'd need:
        <Route path="" element={<ChooseExamTypes />} />
        But index is clearer and preferred for default rendering. When to Use
        index: You want a default route for a nested path (like a dashboard home
        or default tab) You don't want to repeat path="" or path duplication */}
      </div>
    </>
  );
};

export default ViewExams;
