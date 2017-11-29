import './common/boot';
import './styles/index.less';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import storeCreate from './store';
let store = storeCreate();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
