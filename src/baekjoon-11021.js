const fs = require('fs');

// 입력을 구조 분해 할당으로 수정
const [T, ...input] = fs.readFileSync('baekjoon-11021.txt')
  .toString()
  .trim()
  .split('\n');

let output = '';  // 문자열로 초기화

for (let i = 0; i < input.length; i++) {
  const [A, B] = input[i].split(' ').map(Number);

  // 백틱 사용해서 하나의 문자열로 묶기
  output += `Case #${i + 1}: ${A + B}\n`
}

// 시스템 부하 고려해서 반복문 밖에서 출력하기
console.log(output.trim());