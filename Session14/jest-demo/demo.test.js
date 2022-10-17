describe("DEMO TEST", () => {
  test("testing toBe", () => {
    expect(1+1).toBe(2);
  });

  // pengurangan 
  test('PENGURANGAN', () => {
    expect(pengurangan(3, 2)).toBe(1);
  });
});

function pengurangan(a, b){
  return a - b;
}
/* // ! run test with JEST
//* ./node_modules/jest/bin/jest.js


*/