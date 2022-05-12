// 반장 선거
// 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램을 작성하세요.
// 예_ 혜원(이)가 총 4표로 반장이 되었습니다.

// const vote = prompt().split(" ");
const arr = ["나영", "나영", "다영", "다영", "다영", "하영"]
let result = {};
let winner = "";

for(let index in arr){
    let candidate = arr[index];
    result[candidate] = result[candidate] === undefined ? 1 : result[candidate] += 1;
}

winner = Object.keys(result).reduce(function(a, b) {
    return result[a] > result[b] ? a : b
})

console.log(`${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다.`);
