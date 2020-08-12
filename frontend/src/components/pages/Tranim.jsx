import React from 'react';
import { connect } from 'react-redux';

import TranimList from '../tranim/TranimList';
import TranimFilter from '../tranim/TranimFilter';

const Tranim = ({ tranims }) => {
  return (
    <div className='tranim'>
      <TranimFilter />
      {tranims !== null && <TranimList tranims={tranims} />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  tranims: state.tranimApp.tranims,
});

export default connect(mapStateToProps, null)(Tranim);
