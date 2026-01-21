const fs = require('fs');

const [T, ...input] = fs.readFileSync('baekjoon-11022.txt')
.toString()
.trim()
.split('\n');

let output = '';  // 문자열로 초기화

for (let i = 0; i < input.length; i++) {

  const [A, B] = input[i].split(' ').map(Number);
  output += `Case #${i + 1}: ${A} + ${B} = ${A + B}\n`;

}

console.log(output.trim());
