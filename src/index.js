import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

/*
* Applications in react generally have a single root DOM node that renders
* the entire React app (it's the root because it's managed by the React DOM)
*/
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
