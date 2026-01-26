const fs = require('fs');

const input = fs
  .readFileSync('baekjoon-2741.txt') // buffer
  .toString() // string
  .trim();

const n = +input;
let result = [];  // 배열로 초기화

for (let i = 1; i <= n; i++) {
  result.push(i); // 배열의 끝에 명시된 요소 추가 후 반환
}

console.log(result.join('\n')); // 배열의 모든 요소를 구분 문자열로 구분하여 연결 후 반환
