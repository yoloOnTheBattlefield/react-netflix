import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { Provider } from 'react-redux';
import store from './redux/store';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';



ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Route path='/' component={App} />
    </Provider>
  </Router>, document.getElementById('root'));
registerServiceWorker();
