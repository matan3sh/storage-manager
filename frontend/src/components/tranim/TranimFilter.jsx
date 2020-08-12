import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loadTranims } from '../../store/tranim/actions';

const TranimFilter = ({ loadTranims }) => {
  const [location, setLocation] = useState('');

  const onSubmit = () => {
    loadTranims({ location });
  };

  return (
    <div className='tranimFilter'>
      <button onClick={onSubmit}>חפש</button>
      <select
        name='location'
        defaultValue={location}
        onChange={(e) => setLocation(e.target.value)}
      >
        <option value={location} disabled defaultValue>
          בחר מיקום
        </option>
        <option value=''>הכל</option>
        <option value='172'>172</option>
        <option value='192a'>192א</option>
        <option value='192b'>192ב</option>
        <option value='201'>201</option>
        <option value='207'>207</option>
        <option value='218'>218</option>
        <option value='226'>232</option>
        <option value='235'>235</option>
      </select>
    </div>
  );
};

const mapDispatchToProps = {
  loadTranims,
};

export default connect(null, mapDispatchToProps)(TranimFilter);
