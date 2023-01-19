class CodersArray {
  length = 0;

  constructor(...arg) {
    for (let i = 0; i < arg.length; i++) {
      this[i] = arg[i];
    }

    this.length = arg.length;
  }
}

export default CodersArray;

const any = new CodersArray(1, 2, 3, 4);

console.log(any);
