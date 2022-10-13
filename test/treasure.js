function trasureHunter(dailyLog) {
  const str = dailyLog;
  let result = 0;
  for(let i = 0; i < str.length;i++){
    if('$' == str[i]){
      result += 100;
    }
    else if('x' == str[i]){
      if(result < 10){
        result = 0
      }else{
        result -= 10; 
      }
    }
    else if('#' == str[i]){
      result *= 0.5;
    }
  }
  return result;
}

console.log(trasureHunter("$x$#x$")); // 185
console.log(trasureHunter("$$#x$$")); // 290
console.log(trasureHunter("x$#x$#x$")); // 160
console.log(trasureHunter("xx$#$#$#$###xx")); // 3.4375