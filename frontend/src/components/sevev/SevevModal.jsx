import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateSevevs } from '../../store/sevev/actions';

import Modal from 'react-modal';
Modal.setAppElement('#root');

const SevevModal = ({ onClose, open, sevev, updateSevevs }) => {
  const [quantity, setQuantity] = useState(sevev.quantity);
  const [notes, setNotes] = useState(sevev.notes);

  const onUpdate = (sevev) => {
    let updatedSevev = { ...sevev, notes, quantity };
    updateSevevs(updatedSevev);
    onClose();
  };

  return (
    <Modal
      isOpen={open}
      onRequestClose={() => onClose()}
      className={'modal'}
      overlayClassName={'overlay'}
    >
      <div className='tranim__modal'>
        <h2>{sevev.type}</h2>
        <p>{sevev.identifier}</p>
        <h3>{sevev.name}</h3>
        <label>כמות:</label>
        <input
          type='number'
          placeholder='כמות'
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <label>הערות:</label>
        <textarea
          type='text'
          rows='4'
          placeholder='הערות'
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
        <button onClick={() => onUpdate(sevev)}>עדכן</button>
      </div>
    </Modal>
  );
};

const mapDispatchToProps = {
  updateSevevs,
};

export default connect(null, mapDispatchToProps)(SevevModal);
