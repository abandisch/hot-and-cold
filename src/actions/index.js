export const SHOW_GAME_RULES = 'SHOW_GAME_RULES';
export const setShowGameRules = showGameRules => ({
  type: SHOW_GAME_RULES,
  showGameRules
});

export const MAKE_A_GUESS = 'MAKE_GUESS';
export const makeAGuess = guessedNumber => ({
  type: MAKE_A_GUESS,
  guessedNumber
});

export const RESTART_GAME = 'RESTART_GAME';
export const restartGame = (min, max) => ({
  type: RESTART_GAME,
  minNumber: min,
  maxNumber: max
});