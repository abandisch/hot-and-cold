import React from 'react';
import PropTypes from 'prop-types';
import './GuessCountDisplay.css';

const GuessCountDisplay = ({count}) => (
  <p className="guess-count">Guessed <span className="count">{count}</span> time(s)!</p>
);

GuessCountDisplay.propTypes = {
  count: PropTypes.number.isRequired
};

export default GuessCountDisplay;