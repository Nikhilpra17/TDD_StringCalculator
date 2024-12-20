// add.test.js
const add = require("../utils/add");

test("returns 0 for an empty string", () => {
  expect(add("")).toBe(0);
});

test("returns the number itself for a single number", () => {
  expect(add("1")).toBe(1);
});

test("returns the sum of two numbers", () => {
  expect(add("1,2")).toBe(3);
});

test("returns the sum of multiple numbers", () => {
  expect(add("1,2,3")).toBe(6);
});

test("handles newlines between numbers", () => {
  expect(add("1\n2,3")).toBe(6);
});

test("throws error for a single negative number", () => {
  expect(() => add("-1")).toThrow("Negative numbers not allowed: -1");
});

test("throws error for multiple negative numbers", () => {
  expect(() => add("1,-2,-3")).toThrow("Negative numbers not allowed: -2, -3");
});
