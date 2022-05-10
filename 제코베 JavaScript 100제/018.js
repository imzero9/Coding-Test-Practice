// 평균 점수
// 공백으로 구분되는 세 과목의 평균 점수를 구하는 프로그램을 작성하세요. 소수점은 모두 버립니다.

const grades = prompt("성적을 입력하세요(공백으로 구분)");
let sum = 0;

const arr = grades.split(" ");
for (let i =0; i < arr.length; i++) {
    sum += parseInt(arr[i]);
}
console.log(Math.floor(sum / arr.length));