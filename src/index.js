import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HotAndColdGame from './components/hot-and-cold-game';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<HotAndColdGame minNumber={1} maxNumber={100} />, document.getElementById('root'));
registerServiceWorker();
