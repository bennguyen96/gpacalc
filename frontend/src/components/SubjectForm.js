import React, { useState } from 'react';

const SubjectForm = ({ addSubject }) => {
  const [subject, setSubject] = useState({
    code: '',
    name: '',
    score: '',
    grade: '',
    creditPoints: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    addSubject(subject);
    setSubject({
      code: '',
      name: '',
      score: '',
      grade: '',
      creditPoints: ''
    });
  };

  return (
    <form className="flex justify-start gap-5" onSubmit={handleSubmit}>
      <input
        type="text"
        value={subject.code}
        onChange={(e) => setSubject((prevState) => ({
          ...prevState, code: e.target.value
        }))}
        alt="Subject Code"
      />
      <input
        type="text"
        value={subject.name}
        onChange={(e) => setSubject((prevState) => ({
          ...prevState, name: e.target.value
        }))}
        alt="Subject Name"
      />
      <input
        type="text"
        value={subject.score}
        onChange={(e) => setSubject((prevState) => ({
          ...prevState, score: e.target.value
        }))}
        alt="Subject Score"
      />
      <input
        type="text"
        value={subject.grade}
        onChange={(e) => setSubject((prevState) => ({
          ...prevState, grade: e.target.value
        }))}
        alt="Subject Grade"
      />
      <input
        type="text"
        value={subject.creditPoints}
        onChange={(e) => setSubject((prevState) => ({
          ...prevState, creditPoints: e.target.value
        }))}
        alt="Subject Credit Points"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default SubjectForm;
