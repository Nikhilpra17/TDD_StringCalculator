// add.test.js
const add = require("../utils/add");

test("returns the number itself for a single number", () => {
  expect(add("1")).toBe(1);
});
