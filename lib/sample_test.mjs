import { strict as assert } from "assert";
import Sample from "./sample";
import rewire from "rewire";

test("exported class", () => {
  let ret = "";
  const print = str => (ret = str);
  const sample = new Sample(print);
  sample.say();
  assert.equal(ret, "Hello TDDBC!");
});

const SampleImpl = rewire("./sample");
test("private function", () => {
  const hello = SampleImpl.__get__("hello");
  expect(hello()).toBe("Hello TDDBC!");
});
