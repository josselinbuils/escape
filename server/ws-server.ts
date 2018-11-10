import { Action, Store } from 'redux';
import { OPEN, Server } from 'ws';

import { stopMainTimer, TIMER_START_MAIN, TIMER_STOP_MAIN, updateMainTimer } from '../src/Timer/actions';

import { Logger } from './logger';

export class WsServer extends Server {
  static async listen(port: number, store: Store): Promise<void> {
    return new Promise<void>(resolve => {

      const server = new Server({ port }, () => {
        Logger.info(`WebSocket server is listening on port ${port}`);
        resolve();
      });

      const dispatch = (action: Action) => {
        store.dispatch(action);

        server.clients.forEach(client => {
          if (client.readyState === OPEN) {
            client.send(JSON.stringify(action));
          }
        });
      };

      let interval: NodeJS.Timeout;

      server.on('connection', ws => {
        Logger.info('New connection');

        // Sends current state, should be sent using server rendering
        ws.send(JSON.stringify(store.getState()));

        ws.on('message', (message: string) => {
          Logger.info(`Action received: ${message}`);

          const action = JSON.parse(message) as Action;

          dispatch(action);

          switch (action.type) {
            case TIMER_START_MAIN:
              let timeLeft = store.getState().timerReducer.main.timeLeft;

              if (timeLeft === undefined || timeLeft === 0) {
                timeLeft = 30;
              }

              interval = setInterval(() => {
                if (timeLeft > 0) {
                  timeLeft = Math.round((timeLeft - 0.1) * 10) / 10;
                  updateMainTimer(timeLeft)(dispatch);
                } else {
                  stopMainTimer()(dispatch);
                  clearInterval(interval);
                }
              }, 100);

              updateMainTimer(timeLeft)(dispatch);
              break;
            case TIMER_STOP_MAIN:
              clearInterval(interval);
          }
        });
      });
    });
  }
}
