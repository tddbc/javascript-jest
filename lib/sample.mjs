export default class Sample {
  constructor(printFunc) {
    this.print = printFunc || console.log;
  }

  say() {
    this.print(hello());
  }
}

function hello() {
  return "Hello TDDBC!";
}
