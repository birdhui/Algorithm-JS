const fs = require('fs');

const input = fs.readFileSync('baekjoon-2440.txt')
.toString();

const N = Number(input);  // 숫자형으로 변환
let result = ''; // 출력을 위한 변수

for (let i = 0; i < N; i++) {
  let str = ''; // 별 담을 변수 초기화

  for (let j = 0; j < N - i; j++) {
    str += '*';
  }
  result += str + '\n'; // 역삼각형의 형태로 나오도록 j루프 밖에서 저장
}

console.log(result);  // 역삼각형 별 출력