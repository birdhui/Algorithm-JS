const fs = require('fs');

const input = fs
  .readFileSync('baekjoon-11721.txt')
  .toString()
  .trim();

const results = []; // 배열로 초기화

// 10씩 증가
for (let i = 0; i < input.length; i += 10) {
  // i번째부터 i + 10번 째 전까지 잘라내기
  results.push(input.slice(i, i + 10));   // substring()도 결과값 같음
}

console.log(results.join('\n'));
