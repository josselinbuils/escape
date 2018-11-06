import 'bootstrap/scss/bootstrap.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import './index.scss';
import rootReducer from './reducers/rootReducer';
import { WsConnector } from './ws-connector';

const wsConnector = new WsConnector();

wsConnector
  .getState()
  .then(state => {
    ReactDOM.render(
      <Provider store={createStore(rootReducer, state)}>
        <App />
      </Provider>,
      document.getElementById('root'),
    );
  });
