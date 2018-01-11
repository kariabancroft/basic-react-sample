import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  // <Router>{routes}</Router>,
  // document.getElementById('app')
  <App />, document.getElementById('root')
);
registerServiceWorker();
