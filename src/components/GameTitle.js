import React from 'react';
import PropTypes from 'prop-types';
import './GameTitle.css';

const GameTitle = ({title}) => (
  <h1>{title}</h1>
);

GameTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default GameTitle;