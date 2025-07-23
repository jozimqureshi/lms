import React from "react";

import { allExams, teacher } from './data/sampleObjects.js';



const Welcome = () => {
  return (
    <>
      <div className="row d-flex justify-content-center">
        <div className="col-7 text-center">
          <h5>Welcome {teacher.name}!</h5>
        </div>
      </div>
    </>
  );
};

export default Welcome;
