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
    return (
      <form onSubmit={e => this.onSubmit(e)}>
        <input
          disabled={this.props.disableInputField}
          type="number"
          min={this.props.min}
          max={this.props.max}
          ref={input => this.textInput = input}
        />
        <button>{this.props.btnLabel}</button>
      </form>
    )
  }

}