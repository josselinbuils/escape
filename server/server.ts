import { HttpServer } from './http-server';
import { Logger } from './logger';
import { WsServer } from './ws-server';

import { PORT_HTTP, PORT_WS } from './constants';

async function start(): Promise<void> {
  Logger.info('Starts escape server');

  await HttpServer.listen(PORT_HTTP);
  await WsServer.listen(PORT_WS);

  Logger.info('Escape server successfully started');
}

// noinspection JSIgnoredPromiseFromCall
start(); // tslint:disable-line
