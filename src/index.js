import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Render this component (App) to this root element which is getElementById('root')
// ReactDOM.render() takes two arguments, first being the app, second being the div

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
