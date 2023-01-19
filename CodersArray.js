class CodersArray {
  length = 0;

  constructor(...elements) {
    let index = 0;
    for (const element of elements) {
      this[index] = element;
      index++;
      this.length++;
    }
  }
}

export default CodersArray;
