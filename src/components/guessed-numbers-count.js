import React from 'react';

export default function GuessedNumbersCount({count}) {
  return (
    <p className="guessed-number-count">Guessed {count} time(s)!</p>
  );
}