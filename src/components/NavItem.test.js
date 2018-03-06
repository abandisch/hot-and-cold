import React from 'react';
import {shallow, mount} from 'enzyme';
import NavItem from './NavItem';

describe('<NavItem />', () => {
  it('renders without crashing', () => {
    const func = jest.fn();
    shallow(<NavItem onClick={func} children={'node'} linkClass={'test'} />);
  });

  it('calls the callback function onClick', () => {
    const callback = jest.fn();
    const wrapper = mount(<NavItem onClick={callback} children={'node'} linkClass={'test'} />);
    wrapper.find('button').simulate('click');
    expect(callback).toHaveBeenCalled();
  });

});