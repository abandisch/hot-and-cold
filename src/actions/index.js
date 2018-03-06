import {
  SHOW_GAME_RULES,
  MAKE_A_GUESS,
  RESTART_GAME
} from './actionTypes';

export const displayRules = showRules => ({
  type: SHOW_GAME_RULES,
  showRules
});

export const makeGuess = (guessedNumber) => ({
  type: MAKE_A_GUESS,
  guessedNumber
});

export const restartGame = numberToGuess => ({
  type: RESTART_GAME,
  numberToGuess
});
