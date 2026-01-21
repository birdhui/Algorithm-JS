const fs = require('fs');

const [T, ...input] = fs
  .readFileSync('baekjoon-11022.txt')
  .toString()
  .trim()
  .split('\n');

const result = [];  // 배열 초기화

// forEach 파라미터 규칙
// 1번째 인자: 배열의 요소 (Element)
// 2번째 인자: 배열의 인덱스 (Index)
// 3번째 인자: 순회 중인 배열 자신 (Array) - 거의 안쓰지만 참조 가능
input.forEach((line, index) => {
  const [A, B] = line.split(' ').map(Number);

  result.push(`Case #${index + 1}: ${A} + ${B} = ${A + B}`);
});

// join 사용해서 배열 요소를 줄바꿈 문자로 합쳐서 한 번에 출력
console.log(result.join('\n'));