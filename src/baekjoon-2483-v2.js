const fs = require('fs');

const input = fs.readFileSync('baekjoon-2483.txt')
.toString();

const N = Number(input);
let str = ""; // 별 담을 변수
let result = "";  // 별+줄바꿈을 담을 변수

for (let i = 0; i <= N; i++) {
  str += "*";
  result += str + "\n";
}

console.log(result);