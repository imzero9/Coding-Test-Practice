// 거꾸로 출력하기
// 역순으로 숫자를 출력하는 프로그램을 작성하시오.

// 내 풀이
const num = prompt();
let answer = "";
for (let i = 0; i<num.length; i++){
    answer = num[i] + answer;
}
console.log(answer);

// 재현님 풀이
const nums = "1 2 3 4 5";
const arr = nums.split(" ").reverse();
let reverseVal = "";

for (let i = 0; i < arr.length; i++) {
    reverseVal = reverseVal + (arr[i] + " ");
}

console.log(reverseVal);