import React from 'react';
import {shallow} from 'enzyme';
import GuessResult from './guess-result';

describe('<GuessResult />', () => {
  it('renders without crashing', () => {
    shallow(<GuessResult guessResultText="Guess Result"/>);
  });

  it('renders the guess result text', () => {
    const guessResultText = 'Make a Guess!';
    const wrapper = shallow(<GuessResult guessResultText={guessResultText} />);
    expect(wrapper.contains(<h2 className="guess-result">{guessResultText}</h2>)).toEqual(true);
  });
});