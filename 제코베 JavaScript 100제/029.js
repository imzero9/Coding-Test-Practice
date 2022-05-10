// 대문자만 지나가세요
// 알파벳 하나를 입력했을 때 그 알파벳이 대문자면 YES를 아니면 NO를 출력하세요.

const word = prompt("알파벳을 하나 입력해주세요.");

if (word === word.toUpperCase()) {
    console.log("YES"); 
} else {
    console.log("NO");
}

