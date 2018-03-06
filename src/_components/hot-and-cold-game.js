import React from 'react';
import {connect} from 'react-redux';
import {setShowGameRules, makeAGuess, restartGame} from '../actions';
import TopNavigation from './top-navigation';
import GameRules from './game-rules';
import GuessResult from './guess-result';
import GuessedNumbersList from './guessed-numbers-list';
import GuessedNumberCount from './guessed-numbers-count';
import GuessNumberForm from './guess-number-form';
import {compose} from './utils';
import './hot-and-cold-game.css';

const hideGameRules = () => (setShowGameRules(false));
const displayGameRules = () => (setShowGameRules(true));
const submitAGuess = (guess) => (makeAGuess(guess));
const restartHotColdGame = () => (restartGame(1, 100));

export function HotAndColdGame(props) {

  const {minNumber, maxNumber, guessResultText, guessedCorrectly, guessedNumbers, showGameRules, dispatch} = props;

  return showGameRules ?
    (<GameRules onClickClose={compose(dispatch, hideGameRules)} />) :
    (<div>
      <TopNavigation onClickNewGame={compose(dispatch, restartHotColdGame)} onClickShowRules={compose(dispatch, displayGameRules)}/>
      <h1>HOT or COLD</h1>
      <div className="game">
        <GuessResult guessResultText={guessResultText} />
        <GuessNumberForm
          disableInputField={guessedCorrectly}
          onSubmit={number => guessedCorrectly ? compose(dispatch, restartHotColdGame)() : compose(dispatch, submitAGuess)(number)}
          min={minNumber}
          max={maxNumber}
          btnLabel={guessedCorrectly ? 'Restart Game!' : 'Guess'}
        />
        <GuessedNumberCount count={guessedNumbers ? guessedNumbers.length : 0} />
        <GuessedNumbersList numbers={guessedNumbers} />
      </div>
    </div>);
}

HotAndColdGame.defaultProps = {
  minNumber: 1,
  maxNumber: 100
};

const mapStateToProps = state => ({
  showGameRules: state.showGameRules,
  guessResultText: state.guessResultText,
  guessedCorrectly: state.guessedCorrectly,
  guessedNumbers: state.guessedNumbers,
  numberToGuess: state.numberToGuess
});

export default connect(mapStateToProps)(HotAndColdGame)