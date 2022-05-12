// 구구단 출력하기
// 1에서 9까지 숫자 중 하나를 입력하면 그 단의 구구단 결과를 한 줄에 출력하는 프로그램을 작성하세요.

// 입력 : 2
// 출력 : 2 4 6 8 10 12 14 16 18

const num = prompt("숫자를 입력해주세요");

// 내 풀이
let result = num + "";
for (let i = 2; i < 10; i++) {
    result += ` ${num * i}`
}


// 재현님 풀이
for (let i = 0; i < 9; i++) {
    result = result + num * (i+1) + " ";
}