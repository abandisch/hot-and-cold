import {SHOW_GAME_RULES, RESTART_GAME, MAKE_A_GUESS, UPDATE_GUESS_FEEDBACK} from '../actions/actionTypes';
import textTemplates from './textTemplates';
import randomNumberGenerator from '../utils/randomNumberGenerator';

const initialState = {
  showRules: false, // UI state for displaying the rules
  feedbackText: textTemplates.startGame,
  numbersGuessed: [],
  numberToGuess: randomNumberGenerator(1, 100)
};

const gameReducer = (state = initialState, action) => {
  if (action.type === SHOW_GAME_RULES) {
    return {...state, ...{showRules: action.showRules}};
  }
  else if (action.type === RESTART_GAME) {
    return {...state, ...{
        feedbackText: textTemplates.startGame,
        numbersGuessed: [],
        numberToGuess: action.numberToGuess
      }
    }
  }
  else if (action.type === MAKE_A_GUESS) {
    return {...state,
      ...{
        numbersGuessed: [ ...state.numbersGuessed, action.guessedNumber]
      }
    };
  }
  else if (action.type === UPDATE_GUESS_FEEDBACK) {
    return {...state,
      ...{
        feedbackText: action.feedbackText
      }
    };
  }
  return state;
};

export default gameReducer;