export class Deferred<T> {
  promise: Promise<T>;
  reject!: (error: Error) => void;
  resolve!: (value: T) => void;
  state = DeferredState.Pending;

  constructor() {
    this.promise = new Promise<T>((resolve, reject) => {
      this.resolve = value => {
        this.state = DeferredState.Resolved;
        resolve(value);
      };
      this.reject = error => {
        this.state = DeferredState.Rejected;
        reject(error);
      };
    });
  }
}

export enum DeferredState {
  Pending = 'pending',
  Rejected = 'rejected',
  Resolved = 'resolved',
}
