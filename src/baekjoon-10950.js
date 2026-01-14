const fs = require('fs');

const input = fs.readFileSync('baekjoon-10950.txt')
  .toString()
  .split('\n');
const T = Number(input[0]);

for (i = 1; i <= T; i++) {
  let result = input[i].split(' ');
  console.log(Number(result[0]) + Number(result[1]));
}