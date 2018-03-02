import React from 'react';
import TopNavigation from './top-navigation';
import GameRules from './game-rules';
import GuessResult from './guess-result';
import GuessedNumbersList from './guessed-numbers-list';
import GuessedNumberCount from './guessed-numbers-count';
import GuessNumberForm from './guess-number-form';
import './hot-and-cold-game.css';

const compose = (...fns) => (...args) => {
  return fns.slice(0, -1).reduceRight((res, fn) => fn(res),
    fns[fns.length -1].apply(null,args)
  );
};

const labelTemplates = {
  gameStart: 'Make a Guess!',
  gameEnd: 'You Won. Click Restart Game to play again.',
  extremelyHot: 'Extremely Hot!!!',
  hot: 'Hot!',
  kindaHot: 'Kinda Hot ...',
  cold: 'Brr ... Cold!'
};

const hotOrColdLabel = (correctNumber, guessedNumber) => {
  let label = '';
  const abs = Math.abs(correctNumber - guessedNumber);
  if (abs === 0) {
    label = labelTemplates.gameEnd;
  } else if (abs > 10) {
    label = labelTemplates.cold;
  } else if (abs <= 10 && abs >= 6) {
    label = labelTemplates.kindaHot;
  } else if (abs <= 5 && abs >=3) {
    label = labelTemplates.hot;
  } else if(abs < 3) {
    label = labelTemplates.extremelyHot;
  }
  return label;
};

const generateNumberToGuess = (min, max) => {
  return Math.floor(Math.random() * max) + min;
};

export default class HotAndColdApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showGameRules: false,
      guessResultText: labelTemplates.gameStart,
      guessedCorrectly: false,
      guessedNumbers: [],
      numberToGuess: generateNumberToGuess(this.props.minNumber, this.props.maxNumber)
    };
    this.onSubmitRestart = this.onSubmitRestart.bind(this);
    this.onSubmitGuessedNumber = this.onSubmitGuessedNumber.bind(this);
    this.regenerateNumberToGuess = this.regenerateNumberToGuess.bind(this);
  }

  setShowGameRules(showGameRules) {
    this.setState({showGameRules});
  }

  setGuessedCorrectly(guessedCorrectly) {
    return state => ({...state, ...{guessedCorrectly}});
  }

  resetGuessedNumbers(state) {
    return ({...state, ...{guessedNumbers: []}});
  }

  resetGuessResultText(state) {
    return ({...state, ...{guessResultText: labelTemplates.gameStart}});
  }

  regenerateNumberToGuess(state) {
    return ({...state, ...{numberToGuess: generateNumberToGuess(this.props.minNumber, this.props.maxNumber)}})
  }

  addGuessedNumber(newNumber) {
    return state => ({...state, ...{guessedNumbers: [...state.guessedNumbers, newNumber]}});
  }

  setCorrectGuess(guessedNumber) {
    return state => ({...state, ...{guessedCorrectly: state.numberToGuess === guessedNumber}})
  }

  setGuessResultText = guessedNumber => {
    return state => ({...state, ...{guessResultText: hotOrColdLabel(state.numberToGuess, guessedNumber)}});
  };

  onSubmitGuessedNumber(guessedNumber) {
    const newState = compose(
      this.setGuessResultText(guessedNumber),
      this.setCorrectGuess(guessedNumber),
      this.addGuessedNumber(guessedNumber))(this.state);
    this.setState(newState);
  }

  onSubmitRestart() {
    const newState = compose(
      this.regenerateNumberToGuess,
      this.setGuessedCorrectly(false),
      this.resetGuessResultText,
      this.resetGuessedNumbers)(this.state);
    this.setState(newState);
  }

  render() {
    const {minNumber, maxNumber} = this.props;
    if (this.state.showGameRules) {
      return <GameRules onClickClose={() => this.setShowGameRules(false)} />
    }
    return (
      <div>
        <TopNavigation onClickNewGame={this.onSubmitRestart} onClickShowRules={() => this.setShowGameRules(true)}/>
        <h1>HOT or COLD</h1>
        <div className="game">
          <GuessResult guessResultText={this.state.guessResultText} />
          <GuessNumberForm
            disableInputField={this.state.guessedCorrectly}
            onSubmit={number => this.state.guessedCorrectly ? this.onSubmitRestart() : this.onSubmitGuessedNumber(number)}
            min={minNumber}
            max={maxNumber}
            btnLabel={this.state.guessedCorrectly ? 'Restart Game!' : 'Guess'}
          />
          <GuessedNumberCount count={this.state.guessedNumbers.length} />
          <GuessedNumbersList numbers={this.state.guessedNumbers} />
        </div>
      </div>
    );
  }
}

HotAndColdApp.defaultProps = {
  minNumber: 1,
  maxNumber: 100
};