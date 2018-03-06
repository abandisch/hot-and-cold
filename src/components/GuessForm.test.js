import React from 'react';
import {shallow, mount} from 'enzyme';
import GuessForm from './GuessForm';

describe('<GuessForm />', () => {
  it('renders without crashing', () => {
    const func = jest.fn();
    shallow(<GuessForm isGameOver={false} onSubmit={func} />);
  });

  it('hides the form when it\'s game over', () => {
    const func = jest.fn();
    const wrapper = mount(<GuessForm isGameOver={true} onSubmit={func} />);
    const styles = wrapper.find('form').instance().style._values;
    expect(styles).toEqual({visibility: 'hidden'});
  });

  it('calls the submit function onSubmit', () => {
    const guessedNumber = 12;
    const callback = jest.fn();
    const wrapper = mount(<GuessForm isGameOver={false} onSubmit={callback} />);
    wrapper.find('input[type="number"]').instance().value = guessedNumber;
    wrapper.simulate('submit');
    expect(callback).toHaveBeenCalledWith(guessedNumber);
  });

});