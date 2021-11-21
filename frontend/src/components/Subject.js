import React from 'react';

const Subject = ({ subject }) => (
  <div className="grid grid-cols-6 justify-items-stretch">
    <div className="text-center">
      {subject.code}
    </div>
    <div className="text-center">
      {subject.name}
    </div>
    <div className="text-center">
      {subject.score}
    </div>
    <div className="text-center">
      {subject.grade}
    </div>
    <div className="text-center">
      {subject.creditPoints}
    </div>
  </div>
);

export default Subject;
