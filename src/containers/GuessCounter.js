import {connect} from 'react-redux';
import GuessCountDisplay from '../components/GuessCountDisplay';

const mapStateToProps = state => {
  return {
    count: state.numbersGuessed.length
  }
};

const GuessCounter = connect(
  mapStateToProps
)(GuessCountDisplay);

export default GuessCounter;
