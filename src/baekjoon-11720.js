const fs = require('fs');

const [T, inputData] = fs
  .readFileSync('baekjoon-11720.txt')
  .toString()
  .trim()
  .split('\n');

let sum = 0;

inputData.split('').forEach((num) => {
  sum += Number(num);   // 명시적 형변환
});

console.log(sum);
