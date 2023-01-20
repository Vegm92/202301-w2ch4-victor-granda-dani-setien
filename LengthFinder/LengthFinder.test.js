import LengthFinder from "../LengthFinder/LengthFinder";
// Import lengthTest from "./LengthFinder";

describe("Given LenghtFinder class object called lengthTest ", () => {
  describe("When its constructor instances 1, 2, 3 and 4", () => {
    test("Then it should return {0:1, 1:2, 2:3, 3:4, length:4}", () => {
      const firstValue = 1;
      const secondValue = 2;
      const thirdValue = 3;
      const fourthValue = 4;

      const expectedResultObject = {
        length: 4,
        0: firstValue,
        1: secondValue,
        2: thirdValue,
        3: fourthValue,
      };

      const resultObject = new LengthFinder(
        firstValue,
        secondValue,
        thirdValue,
        fourthValue
      );

      expect(resultObject).toEqual(expectedResultObject);
    });
  });
});
