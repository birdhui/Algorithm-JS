const fs = require('fs'); // 파일 시스템 모듈 불러오기

// 파일 읽기 및 전처리
// 내 컴퓨터 테스트 - 'baekjoon-1000.txt'
// 백준 테스트 -  '/dev/stdin'
const input = fs.readFileSync('baekjoon-1000.txt')
  .toString()
  .split(' '); // 파일을 읽음 (Buffer 형태)

// input 배열에 담긴 값들은 문자열이므로 숫자로 변환
const a = parseInt(input[0]);
const b = parseInt(input[1]);

console.log(a + b);