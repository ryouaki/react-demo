import './common/boot';
import './styles/index.less';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router
} from 'react-router-dom'

import Containers from './containers';
import storeCreate from './store';
import registerServiceWorker from './registerServiceWorker';

let store = storeCreate();

ReactDOM.render(
  <Provider store={store}> 
    <Router>
      <Containers />
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
