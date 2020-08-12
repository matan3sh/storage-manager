import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSevev } from '../../store/sevev/actions';

import Modal from 'react-modal';
Modal.setAppElement('#root');

const SevevAdd = ({ onClose, open, addSevev }) => {
  const [type, setType] = useState('');
  const [identifier, setIdentifier] = useState('');
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [notes, setNotes] = useState('');

  const onSubmit = () => {
    if (type === '' || identifier === '' || name === '') return;
    addSevev({ type, identifier, name, quantity, notes });
    onClose();
  };

  return (
    <Modal
      isOpen={open}
      onRequestClose={() => onClose()}
      className={'modal'}
      overlayClassName={'overlay'}
    >
      <div className='sevev_modal-add'>
        <select defaultValue={type} onChange={(e) => setType(e.target.value)}>
          <option value={type} disabled>
            בחר סוג
          </option>
          <option value='צל״ם'>צל״ם</option>
          <option value='מכ״ם'>מכ״ם</option>
          <option value='אביב'>אביב</option>
          <option value='נץ ירוק'>נץ ירוק</option>
        </select>
        <input
          type='text'
          placeholder='מספר מזהה'
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
        />
        <input
          type='text'
          placeholder='שם'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='number'
          placeholder='כמות'
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <input
          type='text'
          placeholder='הערות'
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
        <button onClick={onSubmit}>הוסף</button>
      </div>
    </Modal>
  );
};

const mapDispatchToProps = {
  addSevev,
};

export default connect(null, mapDispatchToProps)(SevevAdd);
