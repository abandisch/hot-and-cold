import React from 'react';
import './guess-result.css';

export default function GuessResult({guessResult}) {
  return (
    <h2 className="guess-result">{guessResult}</h2>
  );
}