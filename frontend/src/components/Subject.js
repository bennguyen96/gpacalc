import React from 'react';

const Subject = ({ subject }) => (
  <div className="flex gap-5">
    <div>
      {subject.code}
    </div>
    <div>
      {subject.name}
    </div>
    <div>
      {subject.score}
    </div>
    <div>
      {subject.grade}
    </div>
    <div>
      {subject.creditPoints}
    </div>
  </div>
);

export default Subject;
