class LengthFinder {
  constructor(...numbers) {
    let index = 0;
    for (const number of numbers) {
      this[index] = number;
      index++;
    }
  }
}

export default LengthFinder;

const any = new LengthFinder(1, 2, 3, 4);

console.log(any);
