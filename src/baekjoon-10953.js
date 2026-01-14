const fs = require('fs');

const input = fs.readFileSync('baekjoon-10953.txt')
.toString()
.trim()
.split('\n');

const T = Number(input[0]);

for (let i = 1; i <= input[0]; i++) {
  const [A, B] = input[i].split(',').map(Number);
  const result = A + B;

  console.log(result);
}