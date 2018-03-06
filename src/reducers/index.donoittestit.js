import {hotAndColdGameReducer} from './index';
import {restartGame, makeAGuess, setShowGameRules} from '../actions';

describe('# hotAndColdGameReducer', () => {

  describe('# Reducer args', () => {
    it('Should set the initial state when nothing is passed in', () => {
      const state = hotAndColdGameReducer(undefined, {type: '__UNKNOWN'});
      const expectedState = {
        guessedNumbers: [],
        guessResultText: 'Make a Guess!',
        guessedCorrectly: false,
        showGameRules: false
      };
      expect(state).toEqual(expect.objectContaining(expectedState));
      expect(state.numberToGuess).toBeGreaterThanOrEqual(1);
      expect(state.numberToGuess).toBeLessThanOrEqual(100);
    });

    it('Should return the current state on an unknown action', () => {
      let currentState = {};
      const state = hotAndColdGameReducer(currentState, {type: '__UNKNOWN'});
      expect(state).toBe(currentState);
    });
  });

  describe('# setShowGameRules', () => {
    it('returns a state where the game rules should be set to true', () => {
      const currentState = {
        guessedNumbers: [],
        showGameRules: false,
        numberToGuess: 30
      };
      const state = hotAndColdGameReducer(currentState, setShowGameRules(true));
      const expectedState = {
        showGameRules: true
      };
      expect(state).toEqual(expect.objectContaining(expectedState));
    });
  });

  describe('# restartGame', () => {
    it('returns the initial state when restarting the game', () => {
      const currentState = {
        guessedNumbers: [12,15,60,70, 40],
        guessResultText: 'You Won. Click Restart Game to play again.',
        guessedCorrectly: true,
        showGameRules: false,
        numberToGuess: 40
      };
      const state = hotAndColdGameReducer(currentState, restartGame(1, 100));
      const expectedState = {
        guessedNumbers: [],
        guessResultText: 'Make a Guess!',
        guessedCorrectly: false,
        showGameRules: false
      };
      expect(state).toEqual(expect.objectContaining(expectedState));
      expect(state.numberToGuess).toBeGreaterThanOrEqual(1);
      expect(state.numberToGuess).toBeLessThanOrEqual(100);
    });
  });

  describe('# makeAGuess', () => {
    it('returns a state where a guess is recognised as correct', () => {
      let currentState = {
        numberToGuess: 50,
        guessedNumbers: [],
      };
      const expectedState = {
        guessedNumbers: [50],
        guessResultText: 'You Won. Click Restart Game to play again.',
        guessedCorrectly: true
      };
      const guessedNumber = 50;
      const state = hotAndColdGameReducer(currentState, makeAGuess(guessedNumber));
      expect(state).toEqual(expect.objectContaining(expectedState));
    });

    it('returns a state where a guess is recognised as \'Extremely Hot!!!\'', () => {
      let currentState = {
        numberToGuess: 50,
        guessedNumbers: [],
      };
      const expectedState = {
        guessedNumbers: [52],
        guessResultText: 'Extremely Hot!!!',
        guessedCorrectly: false
      };
      const guessedNumber = 52;
      const state = hotAndColdGameReducer(currentState, makeAGuess(guessedNumber));
      expect(state).toEqual(expect.objectContaining(expectedState));
    });

    it('returns a state where a guess is recognised as \'Hot!\'', () => {
      let currentState = {
        numberToGuess: 50,
        guessedNumbers: [],
      };
      const expectedState = {
        guessedNumbers: [54],
        guessResultText: 'Hot!',
        guessedCorrectly: false
      };
      const guessedNumber = 54;
      const state = hotAndColdGameReducer(currentState, makeAGuess(guessedNumber));
      expect(state).toEqual(expect.objectContaining(expectedState));
    });

    it('returns a state where a guess is recognised as \'Kinda Hot ...\'', () => {
      let currentState = {
        numberToGuess: 50,
        guessedNumbers: [],
      };
      const expectedState = {
        guessedNumbers: [60],
        guessResultText: 'Kinda Hot ...',
        guessedCorrectly: false
      };
      const guessedNumber = 60;
      const state = hotAndColdGameReducer(currentState, makeAGuess(guessedNumber));
      expect(state).toEqual(expect.objectContaining(expectedState));
    });

    it('returns a state where a guess is recognised as \'Brr ... Cold!\'', () => {
      let currentState = {
        numberToGuess: 50,
        guessedNumbers: [],
      };
      const expectedState = {
        guessedNumbers: [25],
        guessResultText: 'Brr ... Cold!',
        guessedCorrectly: false
      };
      const guessedNumber = 25;
      const state = hotAndColdGameReducer(currentState, makeAGuess(guessedNumber));
      expect(state).toEqual(expect.objectContaining(expectedState));
    });
  });
});