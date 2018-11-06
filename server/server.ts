import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../src/reducers/rootReducer';

import { PORT_HTTP, PORT_WS } from './constants';
import { HttpServer } from './http-server';
import { Logger } from './logger';
import { WsServer } from './ws-server';

async function start(): Promise<void> {
  Logger.info('Starts escape server');

  const store = createStore(rootReducer, applyMiddleware(thunk));

  await HttpServer.listen(PORT_HTTP);
  await WsServer.listen(PORT_WS, store);

  Logger.info('Escape server successfully started');
}

// noinspection JSIgnoredPromiseFromCall
start();
