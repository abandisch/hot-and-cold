import {connect} from 'react-redux';
import GuessCountDisplay from '../components/GuessCountDisplay';

const mapStateToProps = state => {
  return {
    count: state ? state.numbersGuessed.length : 0
  }
};

const GuessCounter = connect(
  mapStateToProps
)(GuessCountDisplay);

export default GuessCounter;
