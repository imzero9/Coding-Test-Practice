// 1의 개수

// 0부터 1000까지의 1의 개수를 세는 프로그램

let s = "";
for (let i = 0; i <= 1000; i++) {
    s += i;
}

let count = 0;

// 1. for of 문
for (let j of s) {
    if (j == 1) {
        count++;
    }
}

// 2. for in 문
for (let j of s) {
    if (s[j] == 1) {
        count++;
    }
}

// 3. 정규표현식
console.log(s.match(/1/g).length);
