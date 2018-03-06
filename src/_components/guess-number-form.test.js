import React from 'react';
import {shallow, mount} from 'enzyme';
import GuessNumberForm from './guess-number-form';

describe('<GuessNumberForm />', () => {
  it('renders without crashing', () => {
    shallow(<GuessNumberForm />);
  });

  it('should call the onSubmit callback if the form is submitted', () => {
    const callback = jest.fn();
    const wrapper = mount(<GuessNumberForm onSubmit={callback} />);
    const guessedNumber = 12;
    wrapper.find('input[type="number"]').instance().value = guessedNumber;
    wrapper.simulate('submit');
    expect(callback).toHaveBeenCalledWith(guessedNumber);
  });

  it('should not call the onSubmit callback if the input is empty', () => {
    const callback = jest.fn();
    const wrapper = mount(<GuessNumberForm onSubmit={callback} />);
    wrapper.simulate('submit');
    expect(callback).not.toHaveBeenCalled();
  });

  it('should not call the onSubmit callback if the input is not a number', () => {
    const callback = jest.fn();
    const wrapper = mount(<GuessNumberForm onSubmit={callback} />);
    wrapper.find('input[type="number"]').instance().value = 'not a number';
    wrapper.simulate('submit');
    expect(callback).not.toHaveBeenCalled();
  });

  it('should call the onSubmit callback if the input is disabled', () => {
    const callback = jest.fn();
    const wrapper = mount(<GuessNumberForm disableInputField={true} onSubmit={callback} />);
    wrapper.simulate('submit');
    expect(callback).toHaveBeenCalled();
  });
});