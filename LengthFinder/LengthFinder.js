class LengthFinder {
  length;
  constructor(...elements) {
    let index = 0;
    for (const element of elements) {
      this[index] = element;
      index++;
      this.length = index + 1;
    }
  }
}

export default LengthFinder;

const any = new LengthFinder(1, 2, 3, 4);

console.log(any);
