import { OperationResult, OperatorFunction } from "./operator";
import { OnNext, Subscriber, Subscription } from "./subscription";

export namespace Types {
  export interface Observable<T = never> {
    pipe<U = any>(
      ...operations: OperatorFunction<T, OperationResult<U>>[]
    ): Observable<U>;
    subscribe(subscriber: OnNext<T> | Subscriber<T>): Subscription;
  }

  // export interface ObservableInnerState<T = never> {
  //   _innerSequence: OperationResult<T>[];
  //   _subscribers: Subscriber<T>[];
  //   _isComplete: boolean;
  //   _error?: Error;
  // }

  export interface MutableObservable<T = never> extends Observable<T> {
    next(...events: T[]): this;
    compile(...operations: OperatorFunction<T, OperationResult<any>>[]): this;
    close(): void;
  }

  export interface ObservableFork<T = never> extends Observable<T> {
    close(): void;
  }

  export interface PromiseObservable<T = never> extends Observable<T> {}
}

export type Observable<T> = Types.Observable<T>;
export type MutableObservable<T> = Types.MutableObservable<T>;
export type ObservableFork<T> = Types.ObservableFork<T>;
export type PromiseObservable<T> = Types.PromiseObservable<T>;
