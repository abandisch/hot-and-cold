import React from 'react';
import {shallow, mount} from 'enzyme';
import HotColdGameRules from './HotColdGameRules';

describe('<HotColdGameRules />', () => {
  it('renders without crashing', () => {
    const func = jest.fn();
    shallow(<HotColdGameRules onClick={func} showRules={false} />);
  });

  it('shows the rules when showRules is false', () => {
    const func = jest.fn();
    const wrapper = mount(<HotColdGameRules onClick={func} showRules={false} />);
    const styles = wrapper.find('.game-rules-container').instance().style._values;
    expect(styles).toEqual({display: 'none'});
  });

  it('shows the rules when showRules is true', () => {
    const func = jest.fn();
    const wrapper = mount(<HotColdGameRules onClick={func} showRules={true} />);
    const styles = wrapper.find('.game-rules-container').instance().style._values;
    expect(styles).toEqual({display: 'block'});
  });

  it('calls the submit function onSubmit', () => {
    const callback = jest.fn();
    const wrapper = mount(<HotColdGameRules onClick={callback} showRules={true} />);
    wrapper.find('button').simulate('click');
    expect(callback).toHaveBeenCalled();
  });

});