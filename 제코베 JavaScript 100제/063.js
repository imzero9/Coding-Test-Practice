// 친해지고 싶어

// 입력이 주어지면 앞글자만 줄여 출력하는 프로그램 만들기

// ex. 복잡한 세상 편하게 살자 -> 복세편살

const s = "복잡한 세상 편하게 살자".split(" ");
let result = "";

// 내 풀이
for (let i = 0; i < s.length; i++) {
    result += s[i][0];
}
console.log(result);

// 호준님 풀이
for (let j of s) {
    result += j[0];
}
