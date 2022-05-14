// 최댓값 구하기
// 10개의 숫자 중 최댓값을 반환하라

// 내 풀이
const numArr = "10 9 8 7 6 5 4 3 2 1".split(" ");
const sortedNumArr = numArr.sort(function (a, b) {
  return a - b;
});

console.log(+numArr.pop());

// 재현님 풀이
let result = "10 9 8 7 6 5 4 3 2 1";
result.split(" ").map((n) => {
  return parseInt(n, 10);
});

result.sort((a, b) => {
  return b - a;
});

console.log(result[0]);
