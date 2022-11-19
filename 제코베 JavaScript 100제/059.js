// 빈칸 채우기

// 총 문자열의 길이는 50으로 제한하고 사용자가 문자열을 입력하면 문자열을 가운데 정렬해주고, 나머지 빈 부분에는 '='을 채워주세요.

const s = "hi";

const n = 25 + parseInt(s.length / 2, 10);

const left = s.padStart(n, "=");
const right = left.padEnd(50, "=");

console.log(left, left.length);
console.log(right, right.length);
