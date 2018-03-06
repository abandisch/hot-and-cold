import React from 'react';
import {shallow} from 'enzyme';
import GuessedNumbersList from './GuessedNumbersList';

describe('<GuessedNumbersList />', () => {
  it('renders without crashing', () => {
    const numbersGuessed = [1, 2, 3, 4];
    shallow(<GuessedNumbersList numbersGuessed={numbersGuessed} />)
  });

  it('renders the correct amount of numbers guessed', () => {
    const numbersGuessed = [1, 2, 3, 4];
    const wrapper = shallow(<GuessedNumbersList numbersGuessed={numbersGuessed} />);
    expect(wrapper.find('li').length).toEqual(numbersGuessed.length);
  });
});