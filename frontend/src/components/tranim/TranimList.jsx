import React from 'react';
import TranimItem from './TranimItem';

const TranimList = ({ tranims }) => {
  return (
    <table className='content-table'>
      <thead>
        <tr>
          <th className='center'>מספר</th>
          <th>מיקום</th>
          <th>גובה</th>
          <th className='center'>פריטים</th>
        </tr>
      </thead>
      <tbody>
        {tranims?.map((tranim, index) => (
          <TranimItem tranim={tranim} key={index} index={index + 1} />
        ))}
      </tbody>
    </table>
  );
};

export default TranimList;
