import { OPEN, Server } from 'ws';

import { Logger } from './logger';

export class WsServer extends Server {
  static async listen(port: number): Promise<void> {
    return new Promise<void>(resolve => {
      const server = new Server({ port }, () => {
        Logger.info(`WebSocket server is listening on port ${port}`);
        resolve();
      });

      server.on('connection', ws => {
        Logger.info('New connection');

        ws.on('message', message => {
          Logger.info(`Message received: ${message}`);
        });

        ws.on('close', () => {
          Logger.info('Connection closed');
        });
      });
    });
  }
}
