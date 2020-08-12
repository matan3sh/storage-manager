import React, { useState } from 'react';
import { connect } from 'react-redux';

import TranimModal from './TranimModal';

const TranimItem = ({ tranim, index, user }) => {
  const [open, setOpen] = useState(false);

  const onClose = () => setOpen(false);
  const onOpen = () => setOpen(true);

  let toHeb = tranim.location;
  if (toHeb === '192a') toHeb = '192א';
  if (toHeb === '192b') toHeb = '192ב';

  return (
    <>
      <tr onClick={onOpen}>
        <td className='center'>{index}</td>
        <td>{toHeb}</td>
        <td>{tranim.height}</td>
        <td>
          {tranim?.items?.map((item, index) => (
            <p className='tranim__items' key={index}>
              <span className='tranim__items-type'>{item.type}</span>
              <span>{item.identifier}</span>
            </p>
          ))}
        </td>
      </tr>
      {user !== null && (
        <TranimModal onClose={onClose} open={open} tranim={tranim} />
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, null)(TranimItem);
