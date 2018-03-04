import {SHOW_GAME_RULES, setShowGameRules, MAKE_A_GUESS, makeAGuess, RESTART_GAME, restartGame} from './index';

describe('# Actions', () => {
  describe('# setShowGameRules', () => {
    it('returns the setShowGameRules action', () => {
      const showRules = true;
      const action = setShowGameRules(showRules);
      expect(action.type).toEqual(SHOW_GAME_RULES);
      expect(action.showGameRules).toEqual(showRules);
    });
  });

  describe('# makeAGuess', () => {
    it('returns the makeAGuess action', () => {
      const guessedNumber = 32;
      const action = makeAGuess(guessedNumber);
      expect(action.type).toEqual(MAKE_A_GUESS);
      expect(action.guessedNumber).toEqual(guessedNumber);
    });
  });

  describe('# restartGame', () => {
    it('returns the restartGame action', () => {
      const minNumber = 1;
      const maxNumber = 100;
      const action = restartGame(minNumber, maxNumber);
      expect(action.type).toEqual(RESTART_GAME);
      expect(action.minNumber).toEqual(minNumber);
      expect(action.maxNumber).toEqual(maxNumber);
    });
  });
});