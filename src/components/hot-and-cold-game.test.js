import React from 'react';
import {shallow, mount} from 'enzyme';
import HotAndColdGame from './hot-and-cold-game';

describe('<HotAndColdGame />', () => {
  let seedNumbers = [];
  beforeAll(() => {
    for (let i = 0; i < 10; i++) {
      seedNumbers.push(Math.floor(Math.random() * 100) + 1); // Math.floor(Math.random() * max) + min;
    }
  });

  it('renders without crashing', () => {
    shallow(<HotAndColdGame />);
  });

  it('should generate a number to guess between min and max number', () => {
    const wrapper = shallow(<HotAndColdGame minNumber={1} maxNumber={100} />);
    expect(wrapper.state('numberToGuess')).toBeGreaterThanOrEqual(1);
    expect(wrapper.state('numberToGuess')).toBeLessThanOrEqual(100);
  });

  it('starts a new game', () => {
    const wrapper = shallow(<HotAndColdGame />);
    wrapper.setState({
      guessedNumbers: [1, 2, 3, 4],
      numberToGuess: 43
    });
    wrapper.instance().onSubmitRestart();
    expect(wrapper.state('guessedNumbers')).toEqual([]);
    expect(wrapper.state('guessResultText')).toEqual('Make a Guess!');
    expect(wrapper.state('numberToGuess')).toBeGreaterThanOrEqual(0);
    expect(wrapper.state('numberToGuess')).toBeLessThanOrEqual(100);
  });

  it('recognises a guess that is \'Brr ... Cold!\'', () => {
    const wrapper = shallow(<HotAndColdGame />);
    wrapper.setState({
      numberToGuess: 50
    });

    const expectedObject = {
      guessedNumbers: [25],
      guessResultText: 'Brr ... Cold!',
      guessedCorrectly: false
    };

    wrapper.instance().onSubmitGuessedNumber(25);
    expect(wrapper.state()).toEqual(expect.objectContaining(expectedObject));
  });

  it('recognises a guess that is \'Kinda Hot ...\'', () => {
    const wrapper = shallow(<HotAndColdGame />);
    wrapper.setState({
      numberToGuess: 50
    });

    const expectedObject = {
      guessedNumbers: [60],
      guessResultText: 'Kinda Hot ...',
      guessedCorrectly: false
    };

    wrapper.instance().onSubmitGuessedNumber(60);
    expect(wrapper.state()).toEqual(expect.objectContaining(expectedObject));
  });

  it('recognises a guess that is \'Hot!\'', () => {
    const wrapper = shallow(<HotAndColdGame />);
    wrapper.setState({
      numberToGuess: 50
    });

    const expectedObject = {
      guessedNumbers: [54],
      guessResultText: 'Hot!',
      guessedCorrectly: false
    };

    wrapper.instance().onSubmitGuessedNumber(54);
    expect(wrapper.state()).toEqual(expect.objectContaining(expectedObject));
  });

  it('recognises a guess that is \'Extremely Hot!!!\'', () => {
    const wrapper = shallow(<HotAndColdGame />);
    wrapper.setState({
      numberToGuess: 50
    });

    const expectedObject = {
      guessedNumbers: [52],
      guessResultText: 'Extremely Hot!!!',
      guessedCorrectly: false
    };

    wrapper.instance().onSubmitGuessedNumber(52);
    expect(wrapper.state()).toEqual(expect.objectContaining(expectedObject));
  });

  it('recognises a guess that is correct', () => {
    const wrapper = shallow(<HotAndColdGame />);
    wrapper.setState({
      numberToGuess: 50
    });

    const expectedObject = {
      guessedNumbers: [50],
      guessResultText: 'You Won. Click Restart Game to play again.',
      guessedCorrectly: true
    };

    wrapper.instance().onSubmitGuessedNumber(50);
    expect(wrapper.state()).toEqual(expect.objectContaining(expectedObject));
  });

});