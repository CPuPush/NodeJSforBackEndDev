const {incrementQty, decrementQty} = require('../helpers');

test("Increment should add 1", () => {
  expect(incrementQty(1)).toBe(2);
});

test("decrement should minus 1", () => {
  expect(decrementQty(2)).toBe(1);
});