import React from 'react';
import {shallow} from 'enzyme';
import HotColdGame from './HotColdGame';

describe('<HotColdGame />', () => {
  it('renders without crashing', () => {
    shallow(<HotColdGame />);
  });
});