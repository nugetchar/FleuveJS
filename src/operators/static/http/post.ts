import { PromiseObservable } from "../../../observable/promise-observable";
import { HttpOptions } from "./http-types";

export type GetResultOption = "text" | "json" | "blob";

export const post = function <T = any>(
  url: RequestInfo,
  { type, ...init }: HttpOptions = { type: "json" }
): PromiseObservable<T | string | Blob> {
  return new PromiseObservable<T | string | Blob>(
    new Promise((resolve, reject) => {
      fetch(url, { ...init, method: "POST" })
        .then((res) => {
          if (type === "text") {
            return resolve(res.text());
          }

          if (type === "blob") {
            return resolve(res.blob());
          }
          return resolve(res.json());
        })
        .catch((err) => reject(err));
    })
  );
};