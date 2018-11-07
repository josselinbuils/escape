import { Action, ActionCreator, applyMiddleware, createStore, Middleware, Store } from 'redux';

import { Deferred, DeferredState } from './deferred';
import rootReducer from './reducers/rootReducer';

export class SharedStore {
  private localStore?: Store;
  private storeDeferred = new Deferred<Store>();
  private webSocket = new WebSocket(`ws://${location.hostname}:9001`);

  constructor() {
    this.webSocket.onmessage = message => {

      if (this.storeDeferred.state === DeferredState.Pending) {
        const state = JSON.parse(message.data);
        console.log('Preloaded state:', state);
        this.localStore = this.createLocalStore(state);
        this.storeDeferred.resolve(this.localStore);

      } else if (this.localStore !== undefined) {
        const action = JSON.parse(message.data);
        console.log('Action received:', action);
        this.localStore.dispatch(action);
        console.log(this.localStore.getState());

      } else {
        throw new Error('Action received while the local store does not exist');
      }
    };
  }

  async getLocalStore(): Promise<Store> {
    return this.storeDeferred.promise;
  }

  private createLocalStore(state: object): Store {
    // Dispatch Redux actions through WebSocket
    const middleware: Middleware = ({ getState }) => next => (action: ActionCreator<Action>) => {
      if (typeof action === 'function') {
        return action(this.dispatch.bind(this), getState);
      }
      return next(action);
    };

    return createStore(rootReducer, state, applyMiddleware(middleware));
  }

  private dispatch(action: Action): void {
    this.webSocket.send(JSON.stringify(action));
  }
}
