const fs = require('fs');

const input = fs.readFileSync('baekjoon-2742.txt')
.toString()
.trim();

const n = +input;   // input 정수형 타입으로 변환
let results = [];     // 배열로 초기화

for (let i = n; i > 0; i--) {
  results.push(i);    // 배열의 끝에 명시된 요소 추가 후 반환
}

console.log(results.join('\n'));  // 배열의 모든 요소를 줄바꿈 문자로 구분하여 연결 후 반환