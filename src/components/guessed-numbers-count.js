import React from 'react';
import './guessed-number-count.css';

export default function GuessedNumbersCount({count}) {
  return (
    <p className="guessed-number-count">Guessed <span className="count">{count}</span> time(s)!</p>
  );
}