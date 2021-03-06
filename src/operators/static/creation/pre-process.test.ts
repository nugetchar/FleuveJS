import { Observable } from "../../../observable/observable";
import { until } from "../../predicates/until";
import { map } from "../../transform/map";
import { preProcess } from "./pre-process";
import { tap } from "../../side-effects/tap";
import { filter } from "../../predicates/filter";

describe("preProcess", () => {
  it("will succeed", () => expect(true).toBe(true));

  it("should return a new Observable", () => {
    expect(preProcess()).toBeInstanceOf(Observable);
  });

  it("should apply the pre-processing operations every time we next", () => {
    const obs$ = preProcess<number>(
      map((x) => x * 2),
      until((x) => x >= 100)
    );
    let i = 0;

    obs$.subscribe((x) =>
      i < 100 ? expect(x).toEqual(i * 2) : expect(x).toEqual(50)
    );

    for (; i < 200; i++) {
      obs$.next(i);
    }
  });

  it("should apply the pre-processing operations every time we compile", () => {
    const toCall = jest.fn();
    const obs$ = preProcess<number>(filter((x) => {
      toCall();
      return x !== 5;
    }));
    obs$.next(
      ...(() => {
        const sequence = [];
        for (let i = 0; i < 10; i++) {
          sequence.push(i);
        }
        return sequence;
      })()
    );
    obs$.compile(map((x) => x * 2));
    expect(toCall).toHaveBeenCalledTimes(19);
  });
});
