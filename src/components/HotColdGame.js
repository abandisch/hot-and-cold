import React from 'react';
import FeedbackText from '../containers/FeedbackText';
import MakeGuess from '../containers/MakeGuess';
import GuessCounter from '../containers/GuessCounter';
import GuessedNumbers from '../containers/GuessedNumbers';
import DisplayGameRules from '../containers/DisplayGameRules';
import './HotColdGame.css';

const HotColdGame = () => (
  <div>
    <DisplayGameRules />
    <div className="game">
      <FeedbackText />
      <MakeGuess />
      <GuessCounter />
      <GuessedNumbers />
    </div>
  </div>
);

export default HotColdGame;