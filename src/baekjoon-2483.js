const fs = require('fs');

const N = fs.readFileSync('baekjoon-2483.txt')
  .toString();

let num = Number(N);  // 숫자형으로 변환
let result = "";  // i와 j값을 저장할 변수, 문자열로 초기화

for (let i = 0; i < num; i++) {
  for (let j = 0; j <= i; j++) {
    result += "*";
  }
  result += "\n"; // j가 i까지 별을 찍고 줄바꿈
}

console.log(result);
