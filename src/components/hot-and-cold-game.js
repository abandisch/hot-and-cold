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
  constructor(props){
    super(props);
    this.onSubmitRestart = this.onSubmitRestart.bind(this);
  }
  setShowGameRules(showGameRules) {
    this.props.dispatch(setShowGameRules(showGameRules));
  }

  onSubmitGuessedNumber(guessedNumber) {
    this.props.dispatch(makeAGuess(guessedNumber))
  }

  onSubmitRestart() {
    this.props.dispatch(restartGame(this.props.minNumber, this.props.maxNumber));
  }

  render() {
    const {minNumber, maxNumber, guessResultText, guessedCorrectly, guessedNumbers} = this.props;
    if (this.props.showGameRules) {
      return <GameRules onClickClose={() => this.setShowGameRules(false)} />
    }
    return (
      <div>
        <TopNavigation onClickNewGame={this.onSubmitRestart} onClickShowRules={() => this.setShowGameRules(true)}/>
        <h1>HOT or COLD</h1>
        <div className="game">
          <GuessResult guessResultText={guessResultText} />
          <GuessNumberForm
            disableInputField={guessedCorrectly}
            onSubmit={number => guessedCorrectly ? this.onSubmitRestart() : this.onSubmitGuessedNumber(number)}
            min={minNumber}
            max={maxNumber}
            btnLabel={guessedCorrectly ? 'Restart Game!' : 'Guess'}
          />
          <GuessedNumberCount count={guessedNumbers ? guessedNumbers.length : 0} />
          <GuessedNumbersList numbers={guessedNumbers} />
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