import LengthFinder from "./LengthFinder.js";

describe("Given LenghtFinder class :", () => {
  describe("When it receives an array", () => {
    test("Then returns the length ", () => {
      const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
      const expectedResult = 11;

      const result = new LengthFinder(test);

      expect(result).toBe(expectedResult);
    });
  });
});
