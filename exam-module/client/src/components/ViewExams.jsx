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
      </div>
    </>
  );
};

export default ViewExams;
