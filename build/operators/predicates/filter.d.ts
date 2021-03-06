import { OperationResult, OperatorFunction } from "../../models/operator";
export declare const filter: <T = any>(f: OperatorFunction<T, boolean>) => OperatorFunction<T, OperationResult<T>>;
