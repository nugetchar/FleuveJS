export interface Operator<T = any, U = any> {
    (operatorFunction: OperatorFunction<T, U>): OperatorFunction<T>;
}
export declare type OperatorFunction<T, U = any> = (source: T) => U;
