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
    console.log('showing rules');
    console.log('state:', state);
    return {...state, ...{showRules: action.showRules}};
  }
  else if (action.type === RESTART_GAME) {
    console.log('restarting game');
    console.log('state:', state);
    return {...state, ...{
        feedbackText: textTemplates.startGame,
        numbersGuessed: [],
        numberToGuess: action.numberToGuess
      }
    }
  }
  else if (action.type === MAKE_A_GUESS) {
    console.log('make a guess');
    console.log('state:', state);
    console.log('action:', action);

    return {...state,
      ...{
        numbersGuessed: [ ...state.numbersGuessed, action.guessedNumber]
      }
    };
  }
  else if (action.type === UPDATE_GUESS_FEEDBACK) {
    console.log('update feedback');
    return {...state,
      ...{
        feedbackText: action.feedbackText
      }
    };
  }
};

export default gameReducer;