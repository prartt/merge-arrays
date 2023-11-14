import { merge } from "../src/mergeArrays" ;

describe("mergeArrays", () => {
    it("merge basic case", () => {
        const arr1 = [1, 3, 5, 7, 7];
        const arr2 = [2, 4, 6, 8, 9, 10, 11, 12];
        const merged = merge(arr1, arr2);
        expect(merged).toEqual([1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10, 11, 12]);
    })
    it("merge empty array", () => {
        const arr1 = [];
        const arr2 = [];
        const merged = merge(arr1, arr2);
        expect(merged).toEqual([]);
    })
    it("merge array1 empty", () => {
        const arr1 = [];
        const arr2 = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        const merged = merge(arr1, arr2);
        expect(merged).toEqual([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    })

    it("merge array2 empty", () => {
        const arr1 = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        const arr2 = [];
        const merged = merge(arr1, arr2);
        expect(merged).toEqual([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    })

    it('should merge large arrays', () => {
        const arr1 = Array.from({ length: 5000 }, (_, index) => index * 2 + 1); // Sorted array of odd numbers
        const arr2 = Array.from({ length: 5000 }, (_, index) => (index + 1) * 2); // Sorted array of even numbers
        const merged = merge(arr1, arr2);
        const expected = Array.from({ length: 10000 }, (_, index) => index + 1);
        expect(merged).toEqual(expected);
      });
})