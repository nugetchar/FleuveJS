import { OperationResult, OperatorFunction } from "../../models/operator";
export declare const map: <T = any, U = T>(f: OperatorFunction<T, U>) => OperatorFunction<T, OperationResult<U>>;
