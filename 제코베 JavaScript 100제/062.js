// 20190923 출력하기

// 코드 내 숫자 X, 파일 이름이나 경로 X, 시간날짜 함수  X, prompt나 에러번호 X

const s = "aacdddddddddfffffffffgghhh";
let result = "";

console.log(
    `${s.match(/a/g).length}
    ${Number(s.match(/b/g).length)}
    ${s.match(/c/g).length}
    ${s.match(/d/g).length}
    ${Number(s.match(/e/g).length)}
    ${s.match(/f/g).length}
    ${s.match(/g/g).length}
    ${s.match(/h/g).length}
    `
);
