// sort 구현하기
// 공백으로 구분된 키를 순서대로 배치하세요.

const heights = prompt("키를 입력해주세요.(공백으로 구분)");
let sortedHeights = "";

sortedHeights = heights.split(" ").sort(function(a, b){
    return a - b;
}).join(" ");

if (heights === sortedHeights) {
    console.log("YES");
} else {
    console.log("NO");
}