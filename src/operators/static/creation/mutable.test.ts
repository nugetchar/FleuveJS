import {mutable} from './mutable';

describe('mutable', () => {
    it('should create a new MutableObservable', () => {
        const obs$ = mutable(12);
        obs$.subscribe({next: (x) => expect(x).toEqual(12), complete: () => fail(`MutableObservable should not be complete`)});
    });
});