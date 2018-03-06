import gameReducer from './index';
import {restartGame, addGuessedNumber, displayRules} from '../actions';

describe('# gameReducer', () => {

  describe('# reducer args', () => {
    it('Should set the initial state when nothing is passed in', () => {
      const state = gameReducer(undefined, {type: '__UNKNOWN'});
      const expectedState = {
        showRules: false, // UI state for displaying the rules
        numbersGuessed: []
      };
      expect(state).toEqual(expect.objectContaining(expectedState));
      expect(state.numberToGuess).toBeGreaterThanOrEqual(1);
      expect(state.numberToGuess).toBeLessThanOrEqual(100);
    });

    it('Should return the current state on an unknown action', () => {
      let currentState = {};
      const state = gameReducer(currentState, {type: '__UNKNOWN'});
      expect(state).toBe(currentState);
    });
  });

  describe('# displayRules', () => {
    it('returns a state where the showRules should be set to true', () => {
      const currentState = {
        numbersGuessed: [],
        showRules: false,
        numberToGuess: 30
      };
      const state = gameReducer(currentState, displayRules(true));
      const expectedState = {
        showRules: true
      };
      expect(state).toEqual(expect.objectContaining(expectedState));
    });
  });

  describe('# restartGame', () => {
    it('returns the initial state when restarting the game', () => {
      const currentState = {
        numbersGuessed: [12,15,60,70, 40],
        showRules: false,
        numberToGuess: 40
      };
      const state = gameReducer(currentState, restartGame(1, 100));
      const expectedState = {
        numbersGuessed: [],
        showRules: false
      };
      expect(state).toEqual(expect.objectContaining(expectedState));
      expect(state.numberToGuess).toBeGreaterThanOrEqual(1);
      expect(state.numberToGuess).toBeLessThanOrEqual(100);
    });
  });

  describe('# addGuessedNumber', () => {
    it('returns a state where a guess is is added', () => {
      let currentState = {
        numberToGuess: 50,
        numbersGuessed: [],
      };
      const expectedState = {
        numbersGuessed: [40],
      };
      const guessedNumber = 40;
      const state = gameReducer(currentState, addGuessedNumber(guessedNumber));
      expect(state).toEqual(expect.objectContaining(expectedState));
    });
  });
});