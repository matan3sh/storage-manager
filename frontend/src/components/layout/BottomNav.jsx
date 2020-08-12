import React, { useState, useEffect } from 'react';
import { auth } from '../../config/firebase';

import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadSevevs } from '../../store/sevev/actions';
import { loadTranims } from '../../store/tranim/actions';
import { clearUser, setUser } from '../../store/auth/actions';

import AuthModal from '../modal/AuthModal';

const BottomNav = ({ loadSevevs, loadTranims, clearUser, setUser, user }) => {
  // eslint-disable-next-line
  const [openModal, setOpenModal] = useState(false);
  const [openAuth, setOpenAuth] = useState(false);

  useEffect(() => {
    loadSevevs();
    loadTranims();

    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) setUser(authUser);
      else clearUser();
    });
    return () => {
      unsubscribe();
    };

    // eslint-disable-next-line
  }, [user]);

  const onCloseAuth = () => setOpenAuth(false);
  const onOpenAuth = () => setOpenAuth(true);

  return (
    <div className='bottom-nav'>
      <>
        <NavLink
          to='/'
          exact
          className='bottom-nav-link'
          activeClassName='bottom-nav-link-active'
        >
          <i className='material-icons bottom-nav-icon'>home</i>
          <span className='bottom-nav-text'>ראשי</span>
        </NavLink>
        <NavLink
          to='/sevev'
          exact
          className='bottom-nav-link'
          activeClassName='bottom-nav-link-active'
        >
          <i className='material-icons bottom-nav-icon'>web</i>
          <span className='bottom-nav-text'>סבב</span>
        </NavLink>
        <NavLink
          to='/tranim'
          exact
          className='bottom-nav-link'
          activeClassName='bottom-nav-link-active'
        >
          <i className='material-icons bottom-nav-icon'>mail</i>
          <span className='bottom-nav-text'>תרנים</span>
        </NavLink>
        {user === null ? (
          <a href='#/' className='bottom-nav-link' onClick={() => onOpenAuth()}>
            <i className='material-icons bottom-nav-icon'>login</i>
            <span className='bottom-nav-text'>התחבר</span>
          </a>
        ) : (
          <a href='#/' className='bottom-nav-link' onClick={() => clearUser()}>
            <i className='material-icons bottom-nav-icon'>power_settings_new</i>
            <span className='bottom-nav-text'>התנתק</span>
          </a>
        )}
      </>
      <AuthModal openModal={openAuth} onClose={onCloseAuth} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

const mapDispatchToProps = {
  loadSevevs,
  loadTranims,
  clearUser,
  setUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(BottomNav);
