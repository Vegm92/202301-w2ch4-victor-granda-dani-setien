class LengthFinder {
  length = 0;
  constructor(...arrayElements) {
    let index = 0;
    for (const array of arrayElements) {
      this[index] = array;
      index++;
      this.length++;
    }
  }
}

export default LengthFinder;
