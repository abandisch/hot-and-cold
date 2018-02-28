import React from 'react';
import GuessResult from "./guess-result";

export default class HotAndColdApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guessResult: 'Make your Guess!'
    }
  }
  render() {
    return (
      <div>
        <GuessResult guessResult={this.state.guessResult} />
        <div id="guessForm">GuessForm</div>
        <div id="guessCount">GuessCount</div>
        <div id="guessNumbers">GuessNumbers</div>
      </div>
    );
  }
}