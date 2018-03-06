import React from 'react';
import PropTypes from 'prop-types';
import './GuessFeedback.css';

const GuessFeedback = ({feedbackText}) => (
  <h2 className="guess-feedback">{feedbackText}</h2>
);

GuessFeedback.propTypes = {
  feedbackText: PropTypes.string.isRequired
};

export default GuessFeedback;