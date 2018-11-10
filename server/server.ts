import { outputJsonSync, pathExistsSync, readJsonSync } from 'fs-extra';
import { join } from 'path';
import { applyMiddleware, createStore, Store } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../src/rootReducer';

import { EXIT_EVENTS, PORT_HTTP, PORT_WS } from './constants';
import { HttpServer } from './http-server';
import { Logger } from './logger';
import { WsServer } from './ws-server';

const TMP_PATH = join(process.cwd(), '/tmp');
const STATE_PATH = join(TMP_PATH, '/state.json');

async function start(): Promise<void> {
  Logger.info('Starts escape server');

  const state = pathExistsSync(STATE_PATH) ? readJsonSync(STATE_PATH) : {};
  const store = createStore(rootReducer, state, applyMiddleware(thunk));

  await HttpServer.listen(PORT_HTTP);
  await WsServer.listen(PORT_WS, store);

  EXIT_EVENTS.forEach(event => process.on(event as any, exitHandler.bind(null, store, event)));

  Logger.info('Escape server successfully started');
}

function exitHandler(store: Store, event: string): void {
  outputJsonSync(STATE_PATH, store.getState());

  if (event !== 'exit') {
    process.exit();
  }
}

// noinspection JSIgnoredPromiseFromCall
start();
