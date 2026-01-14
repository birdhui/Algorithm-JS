const fs = require('fs');

const input = fs.readFileSync('baekjoon-10952.txt')
.toString()
.trim()
.split('\n');

for (let i = 0; i < input.length; i++) {

  const [A, B] = input[i].split(' ').map(Number);

  if(A == 0 && B == 0) {
    break;
  } else {
    const result = A + B;
    console.log(result);
  }
}