import React from 'react';
import {shallow} from 'enzyme';
import {HotAndColdGame} from './hot-and-cold-game';
import {restartGame, makeAGuess, setShowGameRules} from '../actions';

describe('<HotAndColdGame />', () => {

  it('renders without crashing', () => {
    shallow(<HotAndColdGame minNumber={1} maxNumber={100} guessedNumbers={[]} />);
  });

  it('starts a new game when the \'New Game\' link us clicked', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<HotAndColdGame dispatch={dispatch} />);
    wrapper.find('TopNavigation').simulate('clickNewGame');
    expect(dispatch).toHaveBeenCalledWith(restartGame(1, 100));
  });

  it('accepts a guess from the GuessNumberForm', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<HotAndColdGame dispatch={dispatch} />);
    wrapper.find('GuessNumberForm').simulate('submit');
    expect(dispatch).toHaveBeenCalledWith(makeAGuess());
  });

  it('removes the GameRules component when the close button is clicked', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<HotAndColdGame showGameRules={true} dispatch={dispatch} />);
    wrapper.find('GameRules').simulate('clickClose');
    expect(dispatch).toHaveBeenCalledWith(setShowGameRules(false));
  });
});