/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';

const GpaCalculator = ({ subjects }) => {
  const [gpa, setGpa] = useState();
  const gradeMap = {
    H1: 4,
    H2A: 3.5,
    H2B: 3,
    H3: 2.5,
    P: 1.5,
    F: 0
  };

  useEffect(() => {
    console.log(subjects);
    const credits = subjects.reduce((prev, curr) => prev + parseFloat(curr.creditPoints), 0);
    const score = subjects.reduce((prev, curr) => prev + (curr.creditPoints * gradeMap[curr.grade]), 0);
    const currGpa = score / credits;
    setGpa(currGpa);
  }, [subjects]);

  return (
    <div className="flex justify-center items-center px-10 h-full align-middle rounded-xl border-2 border-uni-blue text-uni-blue">
      <div className="align-middle">
        Current GPA is:
        {parseFloat(gpa).toFixed(3)}
      </div>
    </div>
  );
};

export default GpaCalculator;
