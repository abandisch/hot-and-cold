import React from 'react';
import PropTypes from 'prop-types';
import './HotColdGameRules.css';

const HotColdGameRules = ({onClick, showRules}) => (
  <div style={{display: showRules ? 'block' : 'none'}} className="game-rules-container">
    <div className="content">
      <h3>What do I do?</h3>
      <div className="rules">
        <p>This is a Hot or Cold Number Guessing Game.<br/> The game goes like this: </p>
        <ul>
          <li>1. I pick a <strong>random secret number</strong> between 1 to 100 and keep it hidden.</li>
          <li>2. You need to <strong>guess</strong> until you can find the hidden secret number.</li>
          <li>3. You will <strong>get feedback</strong> on how close ("hot") or far ("cold") your guess is.</li>
        </ul>
        <p>So, Are you ready?</p>
        <button onClick={onClick}>Got It!</button>
      </div>
    </div>
  </div>
);

HotColdGameRules.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default HotColdGameRules;