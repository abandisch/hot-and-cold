import {SHOW_GAME_RULES, MAKE_A_GUESS, RESTART_GAME} from "../actions";

const compose = (...fns) => (...args) => {
  return fns.slice(0, -1).reduceRight((res, fn) => fn(res),
    fns[fns.length -1].apply(null,args)
  );
};

export const labelTemplates = {
  gameStart: 'Make a Guess!',
  gameEnd: 'You Won. Click Restart Game to play again.',
  extremelyHot: 'Extremely Hot!!!',
  hot: 'Hot!',
  kindaHot: 'Kinda Hot ...',
  cold: 'Brr ... Cold!'
};

export const generateNumberToGuess = (min, max) => {
  return Math.floor(Math.random() * max) + min;
};

export const hotOrColdLabel = (correctNumber, guessedNumber) => {
  let label = '';
  const abs = Math.abs(correctNumber - guessedNumber);
  if (abs === 0) {
    label = labelTemplates.gameEnd;
  } else if (abs > 10) {
    label = labelTemplates.cold;
  } else if (abs <= 10 && abs >= 6) {
    label = labelTemplates.kindaHot;
  } else if (abs <= 5 && abs >=3) {
    label = labelTemplates.hot;
  } else if(abs < 3) {
    label = labelTemplates.extremelyHot;
  }
  return label;
};

export const setGuessResultText = guessedNumber => {
  return state => ({...state, ...{guessResultText: hotOrColdLabel(state.numberToGuess, guessedNumber)}});
};

export const checkGuessedCorrectly = guessedNumber => {
  return state => ({...state, ...{guessedCorrectly: state.numberToGuess === guessedNumber}})
};

export const addGuessedNumber = newNumber => {
  return state => ({...state, ...{guessedNumbers: [...state.guessedNumbers, newNumber]}});
};

export const regenerateNumberToGuess = (minNumber, maxNumber) => {
  return state => ({...state, ...{numberToGuess: generateNumberToGuess(minNumber, maxNumber)}})
};

export const setGuessedCorrectly = guessedCorrectly => {
  return state => ({...state, ...{guessedCorrectly}});
};

export const resetGuessResultText = state => ({...state, ...{guessResultText: labelTemplates.gameStart}});

export const resetGuessedNumbers = state => ({...state, ...{guessedNumbers: []}});

const initialState = {
  showGameRules: false,
  guessResultText: labelTemplates.gameStart,
  guessedCorrectly: false,
  guessedNumbers: [],
  numberToGuess: generateNumberToGuess(1, 100)
};

export const hotAndColdGameReducer = (state = initialState, action) => {
  if (action.type === SHOW_GAME_RULES) {
    return ({...state, ...{showGameRules: action.showGameRules}});
  }
  else if (action.type === MAKE_A_GUESS) {
    return compose(
      setGuessResultText(action.guessedNumber),
      checkGuessedCorrectly(action.guessedNumber),
      addGuessedNumber(action.guessedNumber))(state);
  }
  else if (action.type === RESTART_GAME) {
    return compose(
      regenerateNumberToGuess(action.minNumber, action.maxNumber),
      setGuessedCorrectly(false),
      resetGuessResultText,
      resetGuessedNumbers)(state);
  }
  return state;
};