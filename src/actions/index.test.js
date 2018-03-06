import {SHOW_GAME_RULES, RESTART_GAME, ADD_GUESSED_NUMBER} from './actionTypes';
import {displayRules, restartGame, addGuessedNumber} from './index';

describe('# Actions', () => {
  describe('# displayRules', () => {
    it('returns the displayRules action', () => {
      const showRules = true;
      const action = displayRules(showRules);
      expect(action.type).toEqual(SHOW_GAME_RULES);
      expect(action.showRules).toEqual(showRules);
    });
  });

  describe('# addGuessedNumber', () => {
    it('returns the addGuessedNumber action', () => {
      const guessedNumber = 32;
      const action = addGuessedNumber(guessedNumber);
      expect(action.type).toEqual(ADD_GUESSED_NUMBER);
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