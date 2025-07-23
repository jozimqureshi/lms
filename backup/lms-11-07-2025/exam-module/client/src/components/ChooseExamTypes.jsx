import React from "react";

import AllFetchedViewExams from "./AllFetchedViewExams";
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

const examTypes = [...new Set(allExams.map((exam) => exam.examType))];

const ChooseExamTypes = () => {
  const [selectedExamType, setSelectedExamType] = useState(null);
  const [isAllSelected, setIsAllSelected] = useState(false);

  const handleChange = (e) => {
    // const parsed = JSON.parse(e.target.value);
    // const sId = e.target.value;
    // const sType = examTypes.find((exam) => exam.id === sId);

    // setSelectedExamId(sId);
    const data = e.target.value;

    if (data !== "All") {
      setSelectedExamType(data);
      setIsAllSelected(false);
    } else {
      setSelectedExamType(examTypes);
      setIsAllSelected(true);
    }
  };

  return (
    <>
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
                {examTypes.map((examType) => (
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
          <div className="col text-center">
            <AllFetchedViewExams
              selectedExamType={selectedExamType}
              isAllSelected={isAllSelected}
            /> { /* Slicing */ }
          </div>
        </div>
      )}
    </>
  );
};

export default ChooseExamTypes;
