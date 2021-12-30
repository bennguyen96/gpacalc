import React, { useState } from 'react';
import Subject from './Subject';
import SubjectForm from './SubjectForm';
import GpaCalculator from './GpaCalculator';

const SubjectList = () => {
  const [subjects, setSubjects] = useState([]);

  const addSubjectHandler = (subject) => {
    setSubjects((prevState) => ([
      ...prevState,
      subject
    ]));
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col gap-2 w-4/5 bg-gray-100 rounded-xl border-2 border-gray-100 shadow-md text-uni-blue">
        <div className="grid grid-cols-6 gap-0 justify-items-stretch py-5 rounded-xl border-2 border-uni-blue">
          <div className="text-center border-r-2 border-gray-200">Subject Code</div>
          <div className="text-center border-r-2 border-gray-200">Subject Name</div>
          <div className="text-center border-r-2 border-gray-200"> Score</div>
          <div className="text-center border-r-2 border-gray-200">Grade</div>
          <div className="text-center border-r-2 border-gray-200">Credit Points</div>
        </div>
        {subjects.map((subject) => (
          <div>
            <Subject subject={subject} addSubject={addSubjectHandler} />
            <hr />
          </div>
        ))}
        <SubjectForm addSubject={addSubjectHandler} />
      </div>
      {subjects.length > 0 && <GpaCalculator subjects={subjects} />}
    </div>
  );
};

export default SubjectList;
