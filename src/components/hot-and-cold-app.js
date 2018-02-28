import React from 'react';
import GuessResult from './guess-result';
import GuessedNumbersList from './guessed-numbers-list';
import GuessedNumberCount from './guessed-numbers-count';

export default class HotAndColdApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guessResult: 'Make your Guess!',
      guessedNumbers: []
    }
  }
  render() {
    return (
      <div>
        <GuessResult guessResult={this.state.guessResult} />
        <div id="guessForm">GuessForm</div>
        <GuessedNumberCount count={this.state.guessedNumbers.length} />
        <GuessedNumbersList numbers={this.state.guessedNumbers} />
      </div>
    );
  }
}