import React, { useState, useEffect } from 'react';
import { auth } from '../../config/firebase';

import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadSevevs } from '../../store/sevev/actions';
import { loadTranims } from '../../store/tranim/actions';
import { clearUser, setUser } from '../../store/auth/actions';

import logo from '../../assets/img/logo.png';
import AboutModal from '../modal/AboutModal';
import AuthModal from '../modal/AuthModal';

const Navbar = ({ loadSevevs, loadTranims, clearUser, setUser, user }) => {
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

  const onClose = () => setOpenModal(false);
  const onOpen = () => setOpenModal(true);

  const onCloseAuth = () => setOpenAuth(false);
  const onOpenAuth = () => setOpenAuth(true);

  return (
    <>
      <header className='navbar'>
        <ul>
          <li>
            {user === null ? (
              <span onClick={onOpenAuth} style={{ color: '#333' }}>
                התחבר
              </span>
            ) : (
              <span style={{ color: '#333', fontSize: '12px' }}>
                שלום, {user?.displayName}
                <span onClick={() => clearUser()}>[התנתק]</span>
              </span>
            )}
          </li>
          <li style={{ marginLeft: '5px' }}>
            <span style={{ color: '#333' }} onClick={onOpen}>
              אודות
            </span>
          </li>
          <li>
            <NavLink activeClassName='nav-active' to='/tranim'>
              תרנים
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName='nav-active' to='/sevev'>
              סבב
            </NavLink>
          </li>
        </ul>
        <div>
          <h1>
            <Link to='/'>
              ניהול<span> - חט״פ</span>
            </Link>
          </h1>
          <img src={logo} alt='logo' />
        </div>
        <AboutModal openModal={openModal} onClose={onClose} />
        <AuthModal openModal={openAuth} onClose={onCloseAuth} />
      </header>
    </>
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

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
