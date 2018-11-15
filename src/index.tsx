import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// No TS Support -> Can't use concurrent mode in current types version -> no maxDuration with suspense
// ReactDOM.createRoot(document.getElementById('root')).render(<App />);
