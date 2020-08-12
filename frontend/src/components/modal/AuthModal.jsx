import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/auth/actions';

import Modal from 'react-modal';
Modal.setAppElement('#root');

const AuthModal = ({ onClose, openModal, signIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    signIn(email, password);
    onClose();
  };

  return (
    <Modal
      isOpen={openModal}
      onRequestClose={() => onClose()}
      className={'modal__auth'}
      overlayClassName={'overlay__auth'}
    >
      <div className='modal-header'>
        <h2>
          <i className='fas fa-sign-in-alt'></i> התחבר
        </h2>
        <span onClick={() => onClose()}>X</span>
      </div>
      <div className='auth'>
        <input
          placeholder='אימייל'
          type='text'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder='סיסמה'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={onSubmit}>התחבר</button>
      </div>
    </Modal>
  );
};

const mapDispatchToProps = {
  signIn,
};

export default connect(null, mapDispatchToProps)(AuthModal);
