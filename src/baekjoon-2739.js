const fs = require('fs');

const input = fs.readFileSync('baekjoon-2739.txt')
.toString()
.trim();

const n = +input; // 정수형으로 변환
let output = [];  // 배열로 초기화

for (let i = 1; i <= 9; i++) {  // 1 ~ 9까지 반복하면서 배열에 저장
  output.push(`${n} * ${i} = ${n * i}`);  // 백틱을 활용해 배열의 끝에 요소 추가 후 반환
}

console.log(output.join('\n')); // 배열의 모든 요소를 줄바꿈 문자로 구분하여 연결 후 반환