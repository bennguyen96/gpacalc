import React, { useState } from 'react';
import Subject from './Subject';
import SubjectForm from './SubjectForm';

const SubjectList = () => {
  const [subjects, setSubjects] = useState([]);

  const addSubjectHandler = (subject) => {
    // TODO: validation
    setSubjects((prevState) => ([
      ...prevState,
      subject
    ]));
  };

  return (
    <div className="flex flex-col gap-5 bg-gray-100 text-uni-blue">
      <table>
        <thead>
          <tr className="flex gap-5">
            <th>Subject Code</th>
            <th>Subject Name</th>
            <th>Score</th>
            <th>Grade</th>
            <th>Credit Points</th>
          </tr>
        </thead>
      </table>
      {subjects.map((subject) => <Subject subject={subject} addSubject={addSubjectHandler} />)}
      <SubjectForm addSubject={addSubjectHandler} />
    </div>
  );
};

export default SubjectList;
