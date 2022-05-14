// 대소문자 바꿔서 출력하기
// 문자열이 주어지면 대문자와 소문자를 바꿔서 출력하세요.

const str = "AAABBBcccddd";
let result = [];

for (let i = 0; i < str.length; i++) {
  if (str[i] === str[i].toUpperCase()) {
    arr.push(str[i].toLowerCase());
  } else {
    arr.push(str[i].toUpperCase());
  }
}

console.log(result.join(""));
