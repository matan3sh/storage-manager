import React from 'react';
import { connect } from 'react-redux';

import SevevTabs from '../sevev/SevevTabs';
import SevevList from '../sevev/SevevList';

const Sevev = ({ sevevs }) => {
  return (
    <div className='sevev'>
      <SevevTabs />
      {sevevs !== null && <SevevList sevevs={sevevs} />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  sevevs: state.sevevApp.sevevs,
});

export default connect(mapStateToProps, null)(Sevev);
