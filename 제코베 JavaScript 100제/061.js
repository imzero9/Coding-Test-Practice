// 문자열 압축하기

// 연속되는 문자열 압축하여 표현하기

const s = "aaabbbbcdddd";
let result = "";
let store_s = s[0];
let count = 0;

for (let i of s) {
    if (i == store_s) {
        count += 1;
    } else {
        result += store_s + String(count);
        store_s = i;
        count = 1;
    }
}
result += store_s + String(count);

console.log(result);
