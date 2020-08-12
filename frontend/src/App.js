import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import BottomNav from './components/layout/BottomNav';
import Home from './components/pages/Home';
import Sevev from './components/pages/Sevev';
import Tranim from './components/pages/Tranim';

import SevevNetzYarok from './components/sevev/tabs/SevevNetzYarok';
import SevevAviv from './components/sevev/tabs/SevevAviv';
import SevevMakam from './components/sevev/tabs/SevevMakam';
import SevevZelem from './components/sevev/tabs/SevevZelem';

function App() {
  return (
    <Router>
      <Navbar />
      <BottomNav />
      <div className='app'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/sevev' component={Sevev} />
          <Route exact path='/sevev/netz-yarok' component={SevevNetzYarok} />
          <Route exact path='/sevev/aviv' component={SevevAviv} />
          <Route exact path='/sevev/makam' component={SevevMakam} />
          <Route exact path='/sevev/zelem' component={SevevZelem} />
          <Route exact path='/tranim' component={Tranim} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
