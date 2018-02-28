import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HotAndColdApp from './components/hot-and-cold-app';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<HotAndColdApp minNumber={1} maxNumber={100} />, document.getElementById('root'));
registerServiceWorker();
