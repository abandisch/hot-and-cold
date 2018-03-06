import React from 'react';
import PropTypes from 'prop-types';
import './GuessForm.css';

const GuessForm = ({onSubmit, isGameOver}) => {
  let input;
  return (
    <form style={{visibility: isGameOver ? 'hidden' : 'visible'}} onSubmit={e => {
      e.preventDefault();
      if (!input.value.trim()) {
        return;
      }
      onSubmit(parseInt(input.value, 10));
      input.value = '';
    }
    }>
      <input required min="1" max="100" type="number" ref={node => input = node}/>
      <button>Guess</button>
    </form>
  );
};

GuessForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isGameOver: PropTypes.bool.isRequired
};

export default GuessForm;