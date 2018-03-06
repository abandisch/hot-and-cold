import React from 'react';
import {shallow} from 'enzyme';
import TopNavigation from './top-navigation';

describe('<TopNavigation />', () => {
  it('renders without crashing', () => {
    shallow(<TopNavigation />);
  });

  it('should call the callback when the What? button is clicked', () => {
    const callback = jest.fn();
    const wrapper = shallow(<TopNavigation onClickShowRules={callback} />);
    wrapper.find('button#show-rules').simulate('click');
    expect(callback).toHaveBeenCalled();
  });

  it('should call the callback when the New Game button is clicked', () => {
    const callback = jest.fn();
    const wrapper = shallow(<TopNavigation onClickNewGame={callback} />);
    wrapper.find('button#new-game').simulate('click');
    expect(callback).toHaveBeenCalled();
  });
});