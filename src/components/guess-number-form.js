import React from 'react';

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
    if (this.props.displayRestartForm) {
      return (
        <form onSubmit={e => this.onSubmit(e)}>
          <button>Restart Game!</button>
        </form>
      )
    }
    return (
      <form onSubmit={e => this.onSubmit(e)}>
        <input
          type="number"
          min={this.props.min}
          max={this.props.max}
          ref={input => this.textInput = input}
        />
        <button>Guess</button>
      </form>
    )
  }

}