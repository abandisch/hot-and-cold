import React from 'react';
import Navigation from './Navigation';
import GameTitle from './GameTitle';
import HotColdGame from './HotColdGame';

const App = () => (
  <div>
    <Navigation />
    <GameTitle title={'Hot or Cold Guessing Game'}/>
    <HotColdGame />
  </div>
);

export default App;