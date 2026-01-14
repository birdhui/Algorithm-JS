const fs = require('fs');

const input = fs
  .readFileSync('baekjoon-10951.txt')
  .toString()
  .trim()
  .split('\n');

for (let i = 0; i < input.length; i++) {
  const [A, B] = input[i].split(' ').map(Number);
  console.log(A + B);
}
