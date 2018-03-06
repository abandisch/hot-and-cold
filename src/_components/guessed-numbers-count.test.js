import React from 'react';
import {shallow} from 'enzyme';
import GuessedNumbersCount from './guessed-numbers-count';

describe('<GuessedNumbersCount />', () => {
  it('renders without crashing', () => {
    shallow(<GuessedNumbersCount />);
  });

  it('renders the count of numbers guessed', () => {
    const guessCount = 2;
    const wrapper = shallow(<GuessedNumbersCount count={guessCount} />);
    expect(wrapper.contains(<p className="guessed-number-count">Guessed <span className="count">{guessCount}</span> time(s)!</p>)).toEqual(true);
  });
});