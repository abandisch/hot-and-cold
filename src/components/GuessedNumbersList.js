import React from 'react';
import PropTypes from 'prop-types';
import './GuessedNumbersList.css';

const GuessedNumbersList = ({numbersGuessed}) => {
  let list = '';
  if (numbersGuessed) {
    list = numbersGuessed.map((number, index) => <li key={index}>{number}</li>);
  }
  return (
    <ul className="guess-box">
      {list}
    </ul>
  );
};

GuessedNumbersList.propTypes = {
  numbersGuessed: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default GuessedNumbersList;