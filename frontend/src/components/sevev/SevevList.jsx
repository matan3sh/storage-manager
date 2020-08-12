import React from 'react';
import SevevItem from './SevevItem';

const SevevList = ({ sevevs }) => {
  return (
    <table className='content-table sevev-table'>
      <thead>
        <tr>
          <th className='center'>מספר</th>
          <th>סוג</th>
          <th>מספר מזהה</th>
          <th>שם</th>
          <th>כמות</th>
          <th>הערות</th>
        </tr>
      </thead>
      <tbody>
        {sevevs?.map((sevev, index) => (
          <SevevItem sevev={sevev} key={index} index={index + 1} />
        ))}
      </tbody>
    </table>
  );
};

export default SevevList;
