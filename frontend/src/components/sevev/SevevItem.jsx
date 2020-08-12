import React, { useState } from 'react';
import { connect } from 'react-redux';

import SevevModal from './SevevModal';

const SevevItem = ({ sevev, index, user }) => {
  const [open, setOpen] = useState(false);

  const onClose = () => setOpen(false);
  const onOpen = () => setOpen(true);

  return (
    <>
      <tr onClick={onOpen}>
        <td className='center'>{index}</td>
        <td>{sevev.type}</td>
        <td>{sevev.identifier}</td>
        <td>{sevev.name}</td>
        <td
          className='center'
          style={{
            backgroundColor: `${sevev.quantity === 0 ? '#d6aa4d' : ''}`,
          }}
        >
          {sevev.quantity}
        </td>
        <td>{sevev.notes}</td>
      </tr>
      {user !== null && (
        <SevevModal onClose={onClose} open={open} sevev={sevev} />
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, null)(SevevItem);
