import {connect} from 'react-redux';
import {makeGuess} from '../actions/index';
import MakeGuessForm from '../components/GuessForm';

const checkGameOver = (guessedNumbers, numberToGuess) => {
  if (guessedNumbers.length === 0) {
    return false;
  }
  const lastGuess = guessedNumbers[guessedNumbers.length - 1];
  return lastGuess === numberToGuess;
};

const mapStateToProps = (state, ownProps) => {
  return {
    isGameOver: state ? checkGameOver(state.numbersGuessed, state.numberToGuess) : false
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: (num) => dispatch(makeGuess(num))
  }
};

const MakeGuess = connect(
  mapStateToProps,
  mapDispatchToProps
)(MakeGuessForm);

export default MakeGuess;