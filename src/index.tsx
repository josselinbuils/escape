import 'bootstrap/scss/bootstrap.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import './index.scss';
import { SharedStore } from './sharedStore';

const sharedStore = new SharedStore();

sharedStore
  .getLocalStore()
  .then(store => {
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('root'),
    );
  });
