import React from 'react';
import {shallow} from 'enzyme';
import GuessFeedback from './GuessFeedback';

describe('<GuessFeedback />', () => {
  it('renders without crashing', () => {
    shallow(<GuessFeedback feedbackText={'test feedback'} />)
  });

  it('renders the feedback', () => {
    const feedbackText = 'Test Feedback';
    const wrapper = shallow(<GuessFeedback feedbackText={feedbackText} />);
    expect(wrapper.find('h2').text()).toEqual(feedbackText);
  });
});