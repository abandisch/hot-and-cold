import React from 'react';
import './guess-result.css';

export default function GuessResult({guessResultText}) {
  return (
    <h2 className="guess-result">{guessResultText}</h2>
  );
}