import React from 'react';
import {shallow} from 'enzyme';
import GuessCountDisplay from './GuessCountDisplay';

describe('<GuessCountDisplay />', () => {
  it('renders without crashing', () => {
    shallow(<GuessCountDisplay count={10}/>);
  });
});