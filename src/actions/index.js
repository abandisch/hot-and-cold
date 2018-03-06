import {
  SHOW_GAME_RULES,
  ADD_GUESSED_NUMBER,
  RESTART_GAME
} from './actionTypes';

export const displayRules = showRules => ({
  type: SHOW_GAME_RULES,
  showRules
});

export const addGuessedNumber = (guessedNumber) => ({
  type: ADD_GUESSED_NUMBER,
  guessedNumber
});

export const restartGame = numberToGuess => ({
  type: RESTART_GAME,
  numberToGuess
});
