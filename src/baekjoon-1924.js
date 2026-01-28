const fs = require('fs');

const input = fs.readFileSync('baekjoon-1924.txt').toString().trim().split(' ');

// x월, y일 배열
let [month, day] = input.map(Number);

// 달마다 최대 일수
const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
// 요일
const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

// totalDays: 2007-01-01부터 x월 y일까지의 총 일수
let totalDays = day;  // 이번 달 일수 담기

// 2007-01-01로부터 며칠이 지났는지 계산
for (let i = 0; i < month - 1; i ++) {
  totalDays += monthDays[i];  // x월 - 1한 월들의 최대 일수 더하기
}

const resultDays = totalDays % 7; // 7로 나눈 나머지 계산
console.log(days[resultDays]);    // 해당 인덱스에 맞는 요일 출력

/*
// solve 2
const date = new Date(`2007-${input[0]}-${input[1]}`);

const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
console.log(day[date.getDay()]);*/

/*
// solve 3
console.log(date.toString().slice(0, 3).toUpperCase());*/
