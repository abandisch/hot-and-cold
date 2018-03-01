import React from 'react';
import './guess-number-form.css';

export default class GuessNumberForm extends React.Component {

  onSubmit(event) {
    event.preventDefault();
    let guessedNumber = parseInt(this.textInput.value.trim(), 10);
    this.textInput.value = '';
    if (Number.isInteger(guessedNumber) || this.textInput.disabled) {
      this.props.onSubmit(guessedNumber);
    }
  }

  render() {
    const {disableInputField, min, max, btnLabel} = this.props;
    return (
      <form onSubmit={e => this.onSubmit(e)}>
        <input
          disabled={disableInputField}
          type="number"
          min={min}
          max={max}
          ref={input => this.textInput = input}
        />
        <button>{btnLabel}</button>
      </form>
    )
  }

}