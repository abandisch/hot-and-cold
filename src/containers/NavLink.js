import {connect} from 'react-redux';
import {displayRules, restartGame} from '../actions/index';
import randomNumberGenerator from '../utils/randomNumberGenerator';
import NavItem from '../components/NavItem';
import {RESTART_GAME, SHOW_GAME_RULES} from '../actions/actionTypes';

const getButtonClass = (btnAction) => {
  if (btnAction === RESTART_GAME) {
    return 'restart-game';
  } else if (btnAction === SHOW_GAME_RULES) {
    return 'display-rules';
  }
  return '';
};

const mapStateToProps = (state, ownProps) => {
  return {
    btnClass: getButtonClass(ownProps.btnAction),
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  if (ownProps.btnAction === SHOW_GAME_RULES) {
    return {
      onClick: () => dispatch(displayRules(true))
    }
  }
  else if (ownProps.btnAction === RESTART_GAME) {
    return {
      onClick: () => dispatch(restartGame(randomNumberGenerator(1, 100)))
    }
  }
};

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavItem);

export default FilterLink;