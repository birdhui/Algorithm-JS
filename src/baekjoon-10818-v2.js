const fs = require('fs');

const input = fs.readFileSync('baekjoon-10818.txt')
.toString()
.trim()
.split('\n');

const N = Number(input[0]);
const arr = input[1].split(' ').map(Number);

let min = arr[0];
let max = arr[0];

for (let i = 0; i < N; i++) {
  if (arr[i] < min) min = arr[i];
  if (arr[i] > max) max = arr[i];
}
''



/*
Math 객체 스택 부하 지림 - 코드 수정
const min = Math.min(...numbers);
const max = Math.max(...numbers);*/

console.log(`${min} ${max}`);