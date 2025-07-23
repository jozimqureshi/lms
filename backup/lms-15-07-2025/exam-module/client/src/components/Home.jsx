import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <>
      <div className="row d-flex justify-content-center">
        <div className="col-7 text-center">
          <h4>This is {props.title} Page</h4>
          <h5>Welcome to the Exam Module!</h5>
          <h6>
            The work is under progress! New exciting features will be coming
            soon!
          </h6>
          <p>
            Please go to{" "}
            <Link
              className="nav-item link-underline-none link-underline-hover"
              to="view-exams"
            >
              View Exams
            </Link>{" "}
            to proceed...
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
