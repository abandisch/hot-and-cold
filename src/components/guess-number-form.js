import React from 'react';
import './guess-number-form.css';

export default class GuessNumberForm extends React.Component {

  onSubmit(event) {
    event.preventDefault();
    let number = null;
    if (this.textInput !== null) {
      number = parseInt(this.textInput.value.trim(), 10);
      this.textInput.value = '';
    }
    this.props.onSubmit(number);
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