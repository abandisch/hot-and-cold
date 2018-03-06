import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


/*
import store from './store';
import {makeGuess, restartGame, displayRules} from './actions';
import textTemplates from './containers/textTemplates';

console.log('state:', store.getState());
const unsubscribe = store.subscribe(() =>
  console.log('new state:', store.getState())
);
store.dispatch(displayRules(true));
store.dispatch(displayRules(false));
store.dispatch(makeGuess(10, textTemplates.coldGuess));
store.dispatch(restartGame(20));

unsubscribe();*/
