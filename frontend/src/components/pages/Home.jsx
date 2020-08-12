import React from 'react';
import { connect } from 'react-redux';

const Home = () => {
  return (
    <div className='home'>
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Badge_of_the_Israel_Defense_Forces.new.svg/1200px-Badge_of_the_Israel_Defense_Forces.new.svg.png'
        alt=''
        style={{ width: '150px', marginBottom: '1rem' }}
      />
      <h2>ברוכים הבאים לממשק ניהול חט״פ</h2>
    </div>
  );
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
