import {SHOW_GAME_RULES, RESTART_GAME, ADD_GUESSED_NUMBER} from '../actions/actionTypes';
import randomNumberGenerator from '../utils/randomNumberGenerator';

const initialState = {
  showRules: false, // UI state for displaying the rules
  numbersGuessed: [],
  numberToGuess: randomNumberGenerator(1, 100)
};

const gameReducer = (state = initialState, action) => {
  if (action.type === SHOW_GAME_RULES) {
    return {...state, ...{showRules: action.showRules}};
  }
  else if (action.type === RESTART_GAME) {
    return {...state, ...{
        numbersGuessed: [],
        numberToGuess: action.numberToGuess
      }
    }
  }
  else if (action.type === ADD_GUESSED_NUMBER) {
    return {...state,
      ...{
        numbersGuessed: [ ...state.numbersGuessed, action.guessedNumber]
      }
    };
  }
  return state;
};

export default gameReducer;