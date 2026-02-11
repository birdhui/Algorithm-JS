const fs = require('fs');

const input = fs.readFileSync('baekjoon-10818.txt')
  .toString()
  .trim()
  .split(/\s+/);  // 스페이스, 탭, 줄바꿈 상관없이 다 쪼개

const N = Number(input[0]); // 0번 인덱스에 반복할 횟수인 N 저장

// 1번 인덱스부터 끝까지 숫자 배열로 변환
const arr = input.slice(1).map(Number);
let min = arr[0];
let max = arr[0];

// 0번에 N 값 들어있으니 1번 인덱스부터
for (let i = 1; i < N; i++) {
  // 최댓값
  if (arr[i] > max) {
    max = arr[i];
  }

  // 최솟값
  if (arr[i] < min) {
    min = arr[i];
  }
}

console.log(`${min} ${max}`);