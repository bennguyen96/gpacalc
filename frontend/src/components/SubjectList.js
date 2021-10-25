import React from 'react';

const SubjectList = () => (
  <div className="flex flex-col gap-5 bg-gray-100 text-uni-blue">
    <table className="gap-5">
      <thead>
        <tr className="">
          <th>Subject Code</th>
          <th>Subject Name</th>
          <th>Score</th>
          <th>Grade</th>
          <th>Credit Points</th>
        </tr>
      </thead>
    </table>
  </div>
);

export default SubjectList;
