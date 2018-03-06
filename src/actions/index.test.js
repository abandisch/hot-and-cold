import {SHOW_GAME_RULES, RESTART_GAME, MAKE_A_GUESS} from './actionTypes';
import {displayRules, restartGame, makeGuess} from './index';

describe('# Actions', () => {
  describe('# displayRules', () => {
    it('returns the displayRules action', () => {
      const showRules = true;
      const action = displayRules(showRules);
      expect(action.type).toEqual(SHOW_GAME_RULES);
      expect(action.showRules).toEqual(showRules);
    });
  });

  describe('# makeGuess', () => {
    it('returns the makeGuess action', () => {
      const guessedNumber = 32;
      const action = makeGuess(guessedNumber);
      expect(action.type).toEqual(MAKE_A_GUESS);
      expect(action.guessedNumber).toEqual(guessedNumber);
    });
  });

  describe('# restartGame', () => {
    it('returns the restartGame action', () => {
      const numberToGuess = 50;
      const action = restartGame(numberToGuess);
      expect(action.type).toEqual(RESTART_GAME);
      expect(action.numberToGuess).toEqual(numberToGuess);
    });
  });
});