import {connect} from 'react-redux';
import GuessFeedback from '../components/GuessFeedback';
import textTemplates from '../reducers/textTemplates';

const evaluateFeedbackText = (numbersGuessed, numberToGuess) => {
  if (numbersGuessed.length === 0) {
    return textTemplates.startGame;
  }

  const guessedNumber = numbersGuessed[numbersGuessed.length - 1];
  const abs = Math.abs(numberToGuess - guessedNumber);
  let feedback;

  if (abs === 0) {
    feedback = textTemplates.endGame;
  } else if (abs > 10) {
    feedback = textTemplates.coldGuess;
  } else if (abs <= 10 && abs >= 6) {
    feedback = textTemplates.kindaHotGuess;
  } else if (abs <= 5 && abs >=3) {
    feedback = textTemplates.hotGuess;
  } else if(abs < 3) {
    feedback = textTemplates.extremelyHotGuess;
  }
  return feedback;
};

const mapStateToProps = (state, ownProps) => {
  return {
    feedbackText: evaluateFeedbackText(state.numbersGuessed, state.numberToGuess)
  }
};

const FeedbackText = connect(
  mapStateToProps
)(GuessFeedback);

export default FeedbackText;