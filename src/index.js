import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import HotAndColdGame from './components/hot-and-cold-game';
import store from './store';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <HotAndColdGame minNumber={1} maxNumber={100} />
  </Provider>,
  document.getElementById('root')
);
// registerServiceWorker();
