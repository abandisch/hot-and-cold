import React from 'react';
import {connect} from 'react-redux';
import {setShowGameRules, makeAGuess, restartGame} from '../actions';
import TopNavigation from './top-navigation';
import GameRules from './game-rules';
import GuessResult from './guess-result';
import GuessedNumbersList from './guessed-numbers-list';
import GuessedNumberCount from './guessed-numbers-count';
import GuessNumberForm from './guess-number-form';
import './hot-and-cold-game.css';

export class HotAndColdGame extends React.Component {
  setShowGameRules(showGameRules) {
    return () => this.props.dispatch(setShowGameRules(showGameRules));
  }

  onSubmitGuessedNumber(guessedNumber) {
    this.props.dispatch(makeAGuess(guessedNumber))
  }

  onSubmitRestart() {
    this.props.dispatch(restartGame(this.props.minNumber, this.props.maxNumber));
  }

  render() {
    const {minNumber, maxNumber} = this.props;
    if (this.props.showGameRules) {
      return <GameRules onClickClose={this.setShowGameRules(false)} />
    }
    return (
      <div>
        <TopNavigation onClickNewGame={this.onSubmitRestart} onClickShowRules={this.setShowGameRules(true)}/>
        <h1>HOT or COLD</h1>
        <div className="game">
          <GuessResult guessResultText={this.props.guessResultText} />
          <GuessNumberForm
            disableInputField={this.props.guessedCorrectly}
            onSubmit={number => this.props.guessedCorrectly ? this.onSubmitRestart() : this.onSubmitGuessedNumber(number)}
            min={minNumber}
            max={maxNumber}
            btnLabel={this.props.guessedCorrectly ? 'Restart Game!' : 'Guess'}
          />
          <GuessedNumberCount count={this.props.guessedNumbers.length} />
          <GuessedNumbersList numbers={this.props.guessedNumbers} />
        </div>
      </div>
    );
  }
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