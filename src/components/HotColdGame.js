import React from 'react';
import FeedbackText from '../containers/FeedbackText';
import MakeGuess from '../containers/MakeGuess';
import GuessCounter from '../containers/GuessCounter';
import GuessedNumbers from '../containers/GuessedNumbers';
import './HotColdGame.css';

const HotColdGame = () => (
  <div className="game">
    <FeedbackText />
    <MakeGuess />
    <GuessCounter />
    <GuessedNumbers />
  </div>
);

export default HotColdGame;