import React from 'react';

export default function GuessedNumbersList({numbers}) {
  const list = numbers.map((number, index) => <li key={index}>{number}</li>);
  return (
    <ul>
      {list}
    </ul>
  );
};