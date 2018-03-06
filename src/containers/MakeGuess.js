import {connect} from 'react-redux';
import {addGuessedNumber} from '../actions';
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
    isGameOver: checkGameOver(state.numbersGuessed, state.numberToGuess)
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: (num) => dispatch(addGuessedNumber(num))
  }
};

const MakeGuess = connect(
  mapStateToProps,
  mapDispatchToProps
)(MakeGuessForm);

export default MakeGuess;