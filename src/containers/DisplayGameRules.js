import {connect} from 'react-redux';
import {displayRules} from '../actions';
import HotColdGameRules from '../components/HotColdGameRules';

const mapStateToProps = (state, ownProps) => {
  return {
    showRules: state.showRules
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => dispatch(displayRules(false))
  }
};

const DisplayGameRules = connect(
  mapStateToProps,
  mapDispatchToProps
)(HotColdGameRules);

export default DisplayGameRules;