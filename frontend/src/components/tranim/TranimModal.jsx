import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateTranims } from '../../store/tranim/actions';
import Modal from 'react-modal';
Modal.setAppElement('#root');

const TranimModal = ({ onClose, open, tranim, updateTranims }) => {
  const [item, setItem] = useState('');
  const [identifier, setIdentifier] = useState('');

  const onDeleteItem = (index) => {
    const updatedTranim = { ...tranim };
    const updatedItems = [...tranim.items];
    updatedItems.splice(index, 1);
    updatedTranim.items = updatedItems;
    updateTranims(updatedTranim);
  };

  const onAddItem = () => {
    tranim.items = [...tranim.items, { type: item, identifier }];
    updateTranims(tranim);
    onClose();
  };

  return (
    <Modal
      isOpen={open}
      onRequestClose={() => onClose()}
      className={'modal'}
      overlayClassName={'overlay'}
    >
      <div className='modal__body'>
        <div className='modal__card second'>
          <i className='fas fa-compass'></i>
          <h2>{tranim.location}</h2>
        </div>
        <div className='modal__card primary'>
          <i className='fas fa-arrows-alt-v'></i>
          <h2>{tranim.height}</h2>
        </div>
      </div>
      <div className='modal__items'>
        {tranim?.items.map((item, index) => (
          <div key={index}>
            <span className='delete' onClick={() => onDeleteItem(index)}>
              X
            </span>
            <p>{item.type}</p>
            <span className='identifier'>{item.identifier}</span>
          </div>
        ))}
      </div>
      <div className='modal__add'>
        <select
          name='items'
          onChange={(e) => setItem(e.target.value)}
          defaultValue={item}
        >
          <option value={item} disabled defaultValue>
            בחר סוג מכלול
          </option>
          <option value='ברונית'>ברונית</option>
          <option value='ברון'>ברון</option>
          <option value='יובל'>יובל</option>
          <option value='יחצ״ג'>יחצ״ג</option>
          <option value='ליל קיץ'>ליל קיץ</option>
          <option value='מט״ל'>מט״ל</option>
          <option value='סמן לייזר'>סמן לייזר</option>
          <option value='רוזן'>רוזן</option>
          <option value='שחף'>שחף</option>
          <option value='CCD'>CCD</option>
        </select>
        <input
          type='text'
          placeholder='הכנס צ׳'
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
        />
        <button onClick={onAddItem}>הוסף</button>
      </div>
    </Modal>
  );
};

const mapDispatchToProps = {
  updateTranims,
};

export default connect(null, mapDispatchToProps)(TranimModal);
