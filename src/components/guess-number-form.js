import React from 'react';

export default class GuessNumberForm extends React.Component {

  onSubmit(event) {
    event.preventDefault();
    const number = parseInt(this.textInput.value.trim(), 10);
    if (Number.isInteger(number)) {
      this.props.onSubmit(number);
      this.textInput.value = '';
    }
    this.textInput.focus();
  }

  render() {
    return (
      <form onSubmit={e => this.onSubmit(e)}>
        <input
          type="text"
          ref={input => this.textInput = input}
        />
        <button>Guess</button>
      </form>
    )
  }

}