import React from 'react';

export default class HotAndColdApp extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div id="guessResult">Guess Result</div>
        <div id="guessForm">GuessForm</div>
        <div id="guessCount">GuessCount</div>
        <div id="guessNumbers">GuessNumbers</div>
      </div>
    );
  }
}