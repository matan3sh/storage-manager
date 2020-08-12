import React, { useState } from 'react';
import { connect } from 'react-redux';

import { NavLink } from 'react-router-dom';
import SevevAdd from './SevevAdd';

const SevevTabs = ({ user }) => {
  const [open, setOpen] = useState(false);

  const onClose = () => setOpen(false);
  const onOpen = () => setOpen(true);

  return (
    <>
      <div className='tabs'>
        <NavLink exact activeClassName='tab-active' to='/sevev/netz-yarok'>
          נץ ירוק
        </NavLink>
        <NavLink exact activeClassName='tab-active' to='/sevev/aviv'>
          אביב
        </NavLink>
        <NavLink exact activeClassName='tab-active' to='/sevev/makam'>
          מכ״ם
        </NavLink>
        <NavLink exact activeClassName='tab-active' to='/sevev/zelem'>
          צל״ם
        </NavLink>
        <NavLink exact activeClassName='tab-active' to='/sevev'>
          הכל
        </NavLink>
        <div className='animation start-home'></div>
        {user !== null && (
          <button onClick={onOpen} className='tabs__button'>
            הוסף
          </button>
        )}
      </div>
      <SevevAdd onClose={onClose} open={open} />
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, null)(SevevTabs);
