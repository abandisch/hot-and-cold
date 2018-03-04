import React from 'react';
import {shallow} from 'enzyme';
import {HotAndColdGame} from './hot-and-cold-game';
import {restartGame, makeAGuess, setShowGameRules} from '../actions';

describe('<HotAndColdGame />', () => {
  let seedNumbers = [];
  beforeAll(() => {
    for (let i = 0; i < 10; i++) {
      seedNumbers.push(Math.floor(Math.random() * 100) + 1); // Math.floor(Math.random() * max) + min;
    }
  });

  it('renders without crashing', () => {
    shallow(<HotAndColdGame minNumber={1} maxNumber={100} guessedNumbers={[]} />);
  });

  it('dispatches restartGame from onSubmitRestart', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<HotAndColdGame dispatch={dispatch} />);
    const instance = wrapper.instance();
    instance.onSubmitRestart();
    expect(dispatch).toHaveBeenCalledWith(restartGame(1, 100));
  });

  it('dispatches makeAGuess from onSubmitRestart', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<HotAndColdGame dispatch={dispatch} />);
    const instance = wrapper.instance();
    const guessedNumber = 12;
    instance.onSubmitGuessedNumber(guessedNumber);
    expect(dispatch).toHaveBeenCalledWith(makeAGuess(guessedNumber));
  });

  it('dispatches setShowGameRules from setShowGameRules', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<HotAndColdGame dispatch={dispatch} />);
    const instance = wrapper.instance();
    instance.setShowGameRules(true);
    expect(dispatch).toHaveBeenCalledWith(setShowGameRules(true));
  });
});