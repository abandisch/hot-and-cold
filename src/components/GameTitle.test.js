import React from 'react';
import {shallow} from 'enzyme';
import GameTitle from './GameTitle';

describe('<GameTitle />', () => {
  it('renders without crashing', () => {
    shallow(<GameTitle title={'test title'}/>);
  });
});