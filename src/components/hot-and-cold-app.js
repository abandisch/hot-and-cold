import React from 'react';
import TopNavigation from './top-navigation';
import GameRules from './game-rules';
import GuessResult from './guess-result';
import GuessedNumbersList from './guessed-numbers-list';
import GuessedNumberCount from './guessed-numbers-count';
import GuessNumberForm from './guess-number-form';
import './hot-and-cold-app.css';

export default class HotAndColdApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showGameRules: false,
      guessResultText: 'Make a Guess!',
      guessedCorrectly: false,
      guessedNumbers: [],
      numberToGuess: this.generateNumberToGuess(this.props.minNumber, this.props.maxNumber)
    }
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

  onSubmitGuessedNumber(guessedNumber) {
    console.log('for testing - numberToGuess:', this.state.numberToGuess);
    this.setGuessedNumbers([...this.state.guessedNumbers, guessedNumber]);
    const guessText = this.hotOrCold(this.state.numberToGuess, guessedNumber);
    this.setGuessResultText(guessText);
    this.setGuessedCorrectly(guessText === 'You Won. Click Restart Game to play again');
  }

  onSubmitRestart() {
    this.setGuessedNumbers([]);
    this.setGuessResultText('Make a Guess!');
    this.setGuessedCorrectly(false);
    this.setNumberToGuess(this.generateNumberToGuess(this.props.minNumber, this.props.maxNumber));
  }

  generateNumberToGuess(min, max) {
    return Math.floor(Math.random() * max) + min;
  }

  hotOrCold(numberToGuess, guess) {
    if (numberToGuess === guess) {
      return 'You Won. Click Restart Game to play again';
    }
    const abs = Math.abs(numberToGuess - guess);
    if (abs >= 10) {
      return 'Cold';
    }
    if (abs < 10 && abs > 5) {
      return 'Kinda Hot';
    }
    if (abs <= 5) {
      return 'hot';
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