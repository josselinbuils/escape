import { DeepPartial } from 'redux';

import { Deferred, DeferredState } from './deferred';
import rootReducer from './reducers/rootReducer';

export class WsConnector {
  private webSocket = new WebSocket(`ws://${location.hostname}:9001`);
  private stateDeferred = new Deferred<DeepPartial<typeof rootReducer>>();

  constructor() {
    this.webSocket.onmessage = message => {
      if (this.stateDeferred.state === DeferredState.Pending) {
        const store = JSON.parse(message.data);
        console.log(store);
        this.stateDeferred.resolve(store);
      }
    };
  }

  getState(): Promise<DeepPartial<typeof rootReducer>> {
    return this.stateDeferred.promise;
  }
}
