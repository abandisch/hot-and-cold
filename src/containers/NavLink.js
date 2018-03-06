import {connect} from 'react-redux';
import {displayRules, restartGame} from '../actions/index';
import randomNumberGenerator from '../utils/randomNumberGenerator';
import NavItem from '../components/NavItem';
import {RESTART_GAME, SHOW_GAME_RULES} from '../actions/actionTypes';

const mapStateToProps = (state, ownProps) => {
  return { }
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