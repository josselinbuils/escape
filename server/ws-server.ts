import { Store } from 'redux';
import { OPEN, Server } from 'ws';

import { Logger } from './logger';

export class WsServer extends Server {
  static async listen(port: number, store: Store): Promise<void> {
    return new Promise<void>(resolve => {

      const server = new Server({ port }, () => {
        Logger.info(`WebSocket server is listening on port ${port}`);
        resolve();
      });

      server.on('connection', ws => {
        Logger.info('New connection');

        // Sends current state, should be sent using server rendering
        ws.send(JSON.stringify(store.getState()));

        ws.on('message', (action: string) => {
          Logger.info(`Action received: ${action}`);

          store.dispatch(JSON.parse(action));

          server.clients.forEach(client => {
            if (client.readyState === OPEN) {
              client.send(action);
            }
          });
        });
      });
    });
  }
}
