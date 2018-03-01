import React from 'react';
import TopNavigation from './top-navigation';
import GameRules from './game-rules';
import GuessResult from './guess-result';
import GuessedNumbersList from './guessed-numbers-list';
import GuessedNumberCount from './guessed-numbers-count';
import GuessNumberForm from './guess-number-form';
import './hot-and-cold-game.css';

export default class HotAndColdApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showGameRules: false,
      guessResultText: 'Make a Guess!',
      guessResultTextTemplates: {
        start: 'Make a Guess!',
        gameWon: 'You Won. Click Restart Game to play again.',
        hot: 'Hot!',
        kindaHot: 'Kinda Hot ...',
        cold: 'Brr ... Cold!'
      },
      guessedCorrectly: false,
      guessedNumbers: [],
      numberToGuess: this.generateNumberToGuess(this.props.minNumber, this.props.maxNumber)
    };
    this.addGuessedNumber = this.addGuessedNumber.bind(this);
  }

  setShowGameRules(showGameRules) {
    this.setState({showGameRules});
  }

  setGuessedCorrectly(guessedCorrectly) {
    this.setState({guessedCorrectly});
  }

  setGuessedNumbers(guessedNumbers) {
    this.setState({guessedNumbers});
  }

  setGuessResultText(guessResultText) {
    this.setState({guessResultText});
  }

  setNumberToGuess(numberToGuess) {
    this.setState({numberToGuess});
  }

  addGuessedNumber(guessedNumber) {
    this.setGuessedNumbers([...this.state.guessedNumbers, guessedNumber]);
  }

  onSubmitGuessedNumber(guessedNumber) {
    console.log('for testing - numberToGuess:', this.state.numberToGuess);
    this.addGuessedNumber(guessedNumber);
    const guessText = this.hotOrCold(this.state.numberToGuess, guessedNumber);
    this.setGuessResultText(guessText);
    this.setGuessedCorrectly(guessText === this.state.guessResultTextTemplates.gameWon);
  }

  onSubmitRestart() {
    this.setGuessedNumbers([]);
    this.setGuessResultText(this.state.guessResultTextTemplates.start);
    this.setGuessedCorrectly(false);
    this.setNumberToGuess(this.generateNumberToGuess(this.props.minNumber, this.props.maxNumber));
  }

  generateNumberToGuess(min, max) {
    return Math.floor(Math.random() * max) + min;
  }

  hotOrCold(numberToGuess, guess) {
    if (numberToGuess === guess) {
      return this.state.guessResultTextTemplates.gameWon;
    }
    const abs = Math.abs(numberToGuess - guess);
    if (abs > 10) {
      return this.state.guessResultTextTemplates.cold;
    }
    if (abs <= 10 && abs >= 5) {
      return this.state.guessResultTextTemplates.kindaHot;
    }
    if (abs < 5) {
      return this.state.guessResultTextTemplates.hot;
    }
  }

  render() {
    const {minNumber, maxNumber} = this.props;
    if (this.state.showGameRules) {
      return <GameRules onClickClose={() => this.setShowGameRules(false)} />
    }
    return (
      <div>
        <TopNavigation onClickNewGame={() => this.onSubmitRestart()} onClickShowRules={() => this.setShowGameRules(true)}/>
        <h1>HOT or COLD</h1>
        <div className="game">
          <GuessResult guessResultText={this.state.guessResultText} />
          <GuessNumberForm
            disableInputField={this.state.guessedCorrectly}
            onSubmit={number => this.state.guessedCorrectly ? this.onSubmitRestart() : this.onSubmitGuessedNumber(number)}
            min={minNumber}
            max={maxNumber}
            btnLabel={this.state.guessedCorrectly ? 'Restart Game!' : 'Guess'}
          />
          <GuessedNumberCount count={this.state.guessedNumbers.length} />
          <GuessedNumbersList numbers={this.state.guessedNumbers} />
        </div>
      </div>
    );
  }
}

HotAndColdApp.defaultProps = {
  minNumber: 1,
  maxNumber: 100
};