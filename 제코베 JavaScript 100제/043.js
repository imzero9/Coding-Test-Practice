// 10진수를 2진수로
// 입력받은 숫자를 2진수로 바꾸고 그 값을 출력해주세요.

// 방법 1
let dec1 = prompt();
// dec(10진수 숫자)를 2로 나눈 나머지값을 순차적으로 저장할 배열 생성
let arrBinary = [];

while (dec1) {
  arrBinary.push(dec % 2);
  dec1 = Math.floor(dec1 / 2); // 정수 반환을 위해
}

console.log(arrBinary.reverse().join(""));

// 방법 2
let dec2 = prompt();
console.log(dec2.toString(2));
