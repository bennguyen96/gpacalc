import React, { useState, useEffect } from 'react';
import Subject from './Subject';
import SubjectForm from './SubjectForm';

const SubjectList = () => {
  const [subjects, setSubjects] = useState([]);
  const [gpa, setGpa] = useState();

  useEffect(() => {
    if (subjects.length > 0) {
      setGpa(subjects.map((subject) => subject.score)
        .reduce((total, grade) => parseInt(total, 10) + parseInt(grade, 10)));
    }
  }, [subjects]);

  const addSubjectHandler = (subject) => {
    // TODO: validation
    setSubjects((prevState) => ([
      ...prevState,
      subject
    ]));
  };

  // const calculateGpa = (subjects) => {
  //   let gpa = 0;
  //   return gpa;
  // }

  return (
    <div className="flex flex-col gap-5 bg-gray-100 rounded-xl border-2 text-uni-blue border-uni-blue">
      {gpa && (
        <div>
          AGGREGATE:
          {gpa}
        </div>
      )}
      <div className="flex gap-10 justify-evenly">
        <div className="pr-10 border-r-2 border-gray-200">Subject Code</div>
        <div>Subject Name</div>
        <div>Score</div>
        <div>Grade</div>
        <div>Credit Points</div>
      </div>
      {subjects.map((subject) => <Subject subject={subject} addSubject={addSubjectHandler} />)}
      <SubjectForm addSubject={addSubjectHandler} />
    </div>
  );
};

export default SubjectList;
