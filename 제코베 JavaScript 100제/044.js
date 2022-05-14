// 각 자리수의 합
// 양의 정수의 각 자리수의 합을 구하는 프로그램을 작성하세요.

// 내 풀이
let num = "12345".split("");
let result = 0;

for (let i = 0; i < num.length; i++) {
  result += parseInt(num[i]);
}

// 재현님 풀이
let num2 = "1234";
let sum = 0;

while (num2) {
  sum += num2 % 10;
  num2 = Math.floor(num2 / 10);
}
