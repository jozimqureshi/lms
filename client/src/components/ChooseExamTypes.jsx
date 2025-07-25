import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import AllFetchedViewExams from "./AllFetchedViewExams";
import { allExams } from '../services/getAllExams';

// const examTypes = (allExams) ? [...new Set(allExams.map((exam) => exam.examType))] : '';

const examsArray = Array.isArray(allExams) ? allExams : [allExams];
const examTypes = examsArray.length
  ? [...new Set(examsArray.map((exam) => exam.examType))]
  : '';

const ChooseExamTypes = (props) => {

  console.log(`allExams = `, allExams);
  console.log(`examTypes = `, examTypes);

  const [urlQuery, setUrlQuery] = useSearchParams(); // React uses useSearchParams to work with Query Strings
  // useSearchParams is similar to useState and can has setter. Both useState and selectedExamType may have skipped setter as well, depending on the requirement. Use setter when you want to change the state on change and if you require only to view the state and updating isn't required, you can skip the setter funciton.

  const urlType = urlQuery.get("type") || null; // Fetching Query String from URL

  // Keeping both below options to learn how many ways we can retrieve values from a variable using && and ||:
  // const [selectedExamType, setSelectedExamType] = useState((urlType && urlType !== "All") ? urlType : examTypes); // By default, selectedExamType = urlType or examTypes depending if it's All or selected type
  // const [selectedExamType, setSelectedExamType] = useState(urlType === "All" ? "All" : urlType || ""); // sets selectedExamType default value to "All" if it's All or any changed urlType or "" for falsy or null.

  const [selectedExamType, setSelectedExamType] = useState(urlType || ""); // By default, selectedExamType = urlType if urlType is truly and "" on falsy.
  const [isAllSelected, setIsAllSelected] = useState(urlType === "All"); // By default, isAllSelected = false and only true when all is selected to keep maintaining history of state.

  const handleChange = (e) => {
    const data = e.target.value;

    if (data === "All") {
      const encodedURL = `?type=${encodeURIComponent(data)}`; // not encodeURIComponent(`?type=${data}`); to avoid unnecessary encoding of ? like: "%3Ftype%3DMid%20Term"

      // window.history.replaceState() is a method from the browser’s History API that allows you to change the URL in the address bar without reloading the page and without adding a new entry in the browser history.
      // Think of it like: “Stay on the same page, just rewrite the current URL silently.”
      // window.history.replaceState(stateObject, title, url);
      // Let’s say data = "Mid Term", then:
      // encodeURIComponent(data) → "Mid%20Term" (safe for URLs)
      // Result:
      // Updates the URL bar to:
      // https://yourdomain.com/view-exams?type=Mid%20Term
      // Does NOT reload the page
      // Does NOT push a new history entry (i.e., the Back button doesn’t treat this as a new page)
      // pushState() -> Adds a new URL to browser history
      // replaceState() -> Replaces the current URL in-place
      // For example:
      // pushState → "push a new page"
      // replaceState → "overwrite current page’s URL silently"
      // When to Use replaceState
      // You want to show query parameters in the URL (like exam type)
      // But you don’t want to pollute the Back button history
      // Typical in filters, sorting, dropdowns

      setSelectedExamType("All");
      setIsAllSelected(true);
      setUrlQuery({});
      window.history.replaceState(null, '', encodedURL); // This updates the browser URL without reloading the page.
    } else {
      setSelectedExamType(data);
      setIsAllSelected(false);
      setUrlQuery({ type: value });
      window.history.replaceState(null, '', `?type=All`);
    }
  };

  return (
    <>
      <div className="row">
        <div className="col text-center overflow-auto">
          <h3 align="center">{props.title}</h3>
          <p className="fst-italic me-2">Pick an Exam Type: </p>
        </div>
      </div>
      <div className="row">
        <div className="col text-center overflow-auto">
          <form name="frmExamType" id="frmExamType">
            <div className="">
              <select
                name="examType"
                className="form-select select-custom"
                value={selectedExamType}
                onChange={handleChange}
              >
                <option value="">--- Select ---</option>
                {/* Showing All  */}
                <option value="All">All</option>
                {/* Showing individuals  */}
                {examTypes && examTypes.map((examType) => (
                  <option key={examType} value={examType}>
                    {examType}
                  </option>

                  /*
                  Don't pass object to <select> and always pass string in props because:
                  React can't compare object-strings reliably between renders.
                  React can't tell which object is selected due to new memory references.
                  Both reasons caused <option> not remain selected after selection change.

                  <option key={exam.id} value={JSON.stringify({id : exam.id, examType : exam.examType})}>
                    {exam.examType}
                  </option>*/
                ))}
              </select>
            </div>
          </form>
        </div>
      </div>
      {selectedExamType && (
        <div className="row">
          <div className="col text-center mt-1">
            <AllFetchedViewExams
              selectedExamType={selectedExamType}
              isAllSelected={isAllSelected}
            />{" "}
            {/* Slicing */}
          </div>
        </div>
      )}
    </>
  );
};

export default ChooseExamTypes;
