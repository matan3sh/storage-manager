import React from 'react';
import { connect } from 'react-redux';

import SevevTabs from '../SevevTabs';
import SevevList from '../SevevList';

const SevevNetzYarok = ({ sevevs }) => {
  return (
    <div>
      <SevevTabs />
      {sevevs !== null && (
        <SevevList
          sevevs={sevevs.filter((sevev) => sevev.type === 'נץ ירוק')}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  sevevs: state.sevevApp.sevevs,
});

export default connect(mapStateToProps, null)(SevevNetzYarok);
