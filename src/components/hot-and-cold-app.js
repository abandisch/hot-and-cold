import React from 'react';
import GuessResult from './guess-result';
import GuessedNumbersList from './guessed-numbers-list';
import GuessedNumberCount from './guessed-numbers-count';
import GuessNumberForm from './guess-number-form';

export default class HotAndColdApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guessResult: 'Make your Guess!',
      guessedNumbers: []
    }
  }

  setGuessedNumbers(number) {
    this.setState({
      guessedNumbers: [...this.state.guessedNumbers, number]
    });
  }

  render() {
    return (
      <div>
        <GuessResult guessResult={this.state.guessResult} />
        <GuessNumberForm onSubmit={number => this.setGuessedNumbers(number)} />
        <GuessedNumberCount count={this.state.guessedNumbers.length} />
        <GuessedNumbersList numbers={this.state.guessedNumbers} />
      </div>
    );
  }
}