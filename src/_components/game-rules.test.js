import React from 'react';
import {shallow, mount} from 'enzyme';
import GameRules from './game-rules';

describe('<GameRules />', () => {
  it('renders without crashing', () => {
    shallow(<GameRules />);
  });

  it('should call the onClickClose callback when the button is clicked', () => {
    const callback = jest.fn();
    const wrapper = mount(<GameRules onClickClose={callback} />);
    wrapper.find('button').simulate('click');
    expect(callback).toHaveBeenCalled();
  });

});