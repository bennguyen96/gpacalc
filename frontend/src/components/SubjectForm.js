/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useEffect } from 'react';

const SubjectForm = ({ addSubject }) => {
  const [subject, setSubject] = useState({
    code: '',
    name: '',
    score: '',
    grade: '',
    creditPoints: ''
  });

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (subject.code.trim().length !== 0
    && subject.name.trim().length !== 0
    && subject.score.trim().length !== 0
    && subject.creditPoints.trim().length !== 0
    && subject.grade.trim().length !== 0
    && (parseInt(subject.score, 10) > 0 && parseInt(subject.score, 10) <= 100)
    && parseInt(subject.creditPoints, 10) > 0) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [subject, setFormValid]);

  const submitHandler = (e) => {
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

  const codeChangeHandler = (e) => {
    setSubject((prevState) => ({
      ...prevState, code: e.target.value
    }));
  };

  const nameChangeHandler = (e) => {
    setSubject((prevState) => ({
      ...prevState, name: e.target.value
    }));
  };

  const scoreChangeHandler = (e) => {
    setSubject((prevState) => ({
      ...prevState, score: e.target.value
    }));
  };

  const gradeChangeHandler = (e) => {
    setSubject((prevState) => ({
      ...prevState, grade: e.target.value
    }));
  };

  const creditPointsChangeHandler = (e) => {
    setSubject((prevState) => ({
      ...prevState, creditPoints: e.target.value
    }));
  };

  return (
    <form className="grid grid-cols-6 gap-5 justify-items-evenly" onSubmit={submitHandler}>
      <input
        className="rounded-xl"
        type="text"
        value={subject.code}
        onChange={codeChangeHandler}
        alt="Subject Code"
      />
      <input
        className="rounded-xl"
        type="text"
        value={subject.name}
        onChange={nameChangeHandler}
        alt="Subject Name"
      />
      <input
        className="rounded-xl"
        type="number"
        value={subject.score}
        min="0"
        max="100"
        onChange={scoreChangeHandler}
        alt="Subject Score"
      />
      <select
        className="rounded-xl"
        value={subject.grade}
        onChange={gradeChangeHandler}
        alt="Subject Grade"
      >
        <option value="" hidden />
        <option value="H1">H1</option>
        <option value="H2A">H2A</option>
        <option value="H2B">H2B</option>
        <option value="H3">H3</option>
        <option value="P">P</option>
        <option value="F">F</option>
      </select>
      <input
        className="rounded-xl"
        type="number"
        step="any"
        min="0"
        value={subject.creditPoints}
        onChange={creditPointsChangeHandler}
        alt="Subject Credit Points"
      />
      <button type="submit" disabled={!formValid} className={`${!formValid && 'cursor-not-allowed'} p-1 bg-gray-200 rounded-xl border-2 border-uni-blue`}>Add</button>
    </form>
  );
};

export default SubjectForm;
