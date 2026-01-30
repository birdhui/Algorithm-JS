const fs = require('fs');

const input = fs.readFileSync('baekjoon-8393.txt')
  .toString()
  .trim();

const n = +input; // 정수형으로 변환
let output = 0;  // 정수로 초기화

for (let i = 1; i <= n; i++) {
  output += i;
}

console.log(output);
