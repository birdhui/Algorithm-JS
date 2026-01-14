const fs = require('fs');
const input = fs.readFileSync('baekjoon-2558.txt')
  .toString()
  .trim()
  .split('\n');

const a = Number(input[0]);
const b = Number(input[1]);

console.log(a + b);
