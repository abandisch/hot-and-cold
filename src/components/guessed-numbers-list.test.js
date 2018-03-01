import React from 'react';
import {shallow} from 'enzyme';
import GuessedNumbersList from './guessed-numbers-list';

describe('<GuessedNumbersList />', () => {
  it('renders without crashing', () => {
    shallow(<GuessedNumbersList />);
  });

  it('renders the list of guessed numbers', () => {
    const guessedNumbers = [1, 2, 3, 4];
    const wrapper = shallow(<GuessedNumbersList numbers={guessedNumbers} />);
    const numberList = wrapper.find('li');
    expect(numberList.length).toEqual(guessedNumbers.length);
  });
});