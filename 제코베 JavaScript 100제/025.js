// 원의 넓이를 구하세요.

// prompt로 입력값 받기
const radius = prompt("반지름을 입력하세요.")

console.log((parseInt(radius, 10)**2)*3.14);

// 함수
function circleWidth(n){
    return n * n * 3.14;
}