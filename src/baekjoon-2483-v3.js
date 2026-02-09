const fs = require('fs');

const input = fs.readFileSync('baekjoon-2483.txt').toString();

const N = Number(input);
let result = '';

for (let i = 1; i <= N; i++) {
  // i가 1일 때 별 1개, 2일 때 별 2개를 만들어 바로 result에 더함
  result += '*'.repeat(i) + '\n';
}

console.log(result);