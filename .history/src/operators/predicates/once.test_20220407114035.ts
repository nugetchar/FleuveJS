import { of } from "../static";

describe("once", () => {
  describe("without predicate", () => {
    it("should only take the first value of an Observable", () => {
      const obs$ = of(12, 13, 14);
    });
  });

  it("should return a new function to apply the once filtering", () => {
    let _innerSource: number = 11;
    const greaterThan10 = filter((x) => x > 10);
    expect(greaterThan10(_innerSource).value).toEqual(_innerSource);
    _innerSource = 9;
    expect(greaterThan10(_innerSource).isFilterNotMatched()).toEqual(true);
  });
});
