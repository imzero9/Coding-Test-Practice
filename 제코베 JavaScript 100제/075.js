// 이상한 369

// 3, 6, 9만으로 이루어진 숫자에서 박수를 칠 때,
// n을 입력하면 박수를 몇 번 쳤는지 그 숫자를 출력하세요

function solution(n) {
    let answer = 0;
    let count = 1;
    const obj = { 3: 1, 6: 2, 9: 3 };

    while (n.length !== 0) {
        answer += obj[parseInt(n.pop(), 10)] * count;
        count *= 3;
    }

    return answer;
}

const user_input = n.split();
