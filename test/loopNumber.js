function printNumber(totalNumber) {
  let result = "";
  function patternItem(x, lastNum) {
    return x % lastNum + 1;
  }
  for (let i = 0; i < totalNumber; i++) {
    result += patternItem(i,3)
  }
  return result;
}
// 4, 7, 10
console.log(printNumber(2)); //12
console.log(printNumber(3)); //123
console.log(printNumber(6)); //123123
console.log(printNumber(10)); //1231231231
console.log(printNumber(30));