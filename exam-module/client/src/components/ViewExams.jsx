import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import ChooseExamTypes from "./ChooseExamTypes";

const ViewExams = (props) => {
  const [stateExamId, setStateExamId] = useState(null);
  
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col text-center overflow-auto">
            <h3 align="center">{props.title}</h3>
            <p className="fst-italic me-2">Pick an Exam Type: </p>
          </div>
        </div>

        {/* Routing  */}

        <Routes>
          <Route path = "/" element = {<ChooseExamTypes />} />
          <Route path = "/exam" element = {<Exam />} />
        </Routes>

      </div>
    </>
  );
};

export default ViewExams;
