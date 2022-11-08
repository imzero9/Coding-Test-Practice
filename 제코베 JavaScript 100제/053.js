// 괄호 문자열

// 입력으로 주어진 괄호 문자열이 바른 문자열인지 바르지 않은 문자열인지 'YES'와 'NO'로 구분된 문자열을 출력해보자

function brackets(arr) {
    let count = 0;

    for (i = 0; i < arr.length; i++) {
        if (arr[i] === "(") {
            count++;
        }
        if (arr[i] === ")") {
            count--;
        }
    }
    if (count != 0) {
        return "NO";
    }

    let bracket = [];
    for (let i in arr) {
        if (arr[i] === "(") {
            bracket.push("(");
        }
        if (arr[i] === ")") {
            if (bracket.length === 0) {
                return false;
            }
            bracket.pop();
        }
    }
    return "YES";
}
