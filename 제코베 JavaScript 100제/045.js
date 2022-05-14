// getTIme()함수 사용하기
// 현재 연도를 출력해보세요.

// 내 풀이
const theDateMs = new Date().getTime();
const theDateSec = Math.floor(theDateMs / 1000);
const theDateDay = Math.floor(theDateSec / (60 * 60 * 24));
const theDateYear = Math.floor(theDateDays / 365);

const currentYear = 1970 + theDateYear;

console.log(currentYear);

// 재현님 풀이
const theDate = new Date();
console.log(Math.floor(theDate.getTime() / (60 * 60 * 24 * 365 * 1000)) + 1970);
