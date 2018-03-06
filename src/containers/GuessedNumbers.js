import {connect} from 'react-redux';
import GuessedNumbersList from '../components/GuessedNumbersList';

const mapStateToProps = state => {
  return {
    numbersGuessed: state ? state.numbersGuessed : []
  }
};

const GuessedNumbers = connect(
  mapStateToProps
)(GuessedNumbersList);

export default GuessedNumbers;
