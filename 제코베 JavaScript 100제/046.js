// 각 자리수의 합 2
// 1부터 20까지의 숫자를 일렬로 놓고 모든 자릿수의 합을 구하시오.

let arr = [];
let result = 0;

for (let i = 0; i < 20; i++) {
  arr[i] = i + 1;
}

arr.forEach((n) => {
  while (n) {
    result += n % 10;
    n = Math.floor(n / 10);
  }
});
