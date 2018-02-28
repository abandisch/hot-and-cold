import React from 'react';
import GuessResult from './guess-result';
import GuessedNumbersList from './guessed-numbers-list';
import GuessedNumberCount from './guessed-numbers-count';
import GuessNumberForm from './guess-number-form';

export default class HotAndColdApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guessResultText: 'Make a Guess!',
      guessedCorrectly: false,
      guessedNumbers: [],
      numberToGuess: this.generateNumberToGuess(this.props.minNumber, this.props.maxNumber)
    }
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
    this.setGuessedCorrectly(guessText === 'You Won. Click new game to play again');
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
      return 'You Won. Click new game to play again';
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
    return (
      <div>
        <GuessResult guessResult={this.state.guessResultText} />
        <GuessNumberForm
          displayRestartForm={this.state.guessedCorrectly}
          onSubmit={number => this.state.guessedCorrectly ? this.onSubmitRestart(number) : this.onSubmitGuessedNumber(number)}
          min={this.props.minNumber}
          max={this.props.maxNumber}
        />
        <GuessedNumberCount count={this.state.guessedNumbers.length} />
        <GuessedNumbersList numbers={this.state.guessedNumbers} />
      </div>
    );
  }
}