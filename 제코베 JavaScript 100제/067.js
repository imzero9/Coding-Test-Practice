// 민규의 악수

// 이 행사에서 진행된 악수는 총 n번이라고 했을 때 민규는 몇 번의 악수를 하고 집에 돌아갔을까요?
// 그리고 민규를 포함한 행사 참가자는 몇 명일까요?

// 행사에서 진행된 악수 횟수 n을 입력으로 받으면 민규의 악수 횟수와 참가자 수가 출력됩니다.

// 악수의 수 = (n-1) + (n-2) + (n-3) ... 1
// n(n-1) / 2

function solution(n) {
    let numOfPeople = 0;
    let numOfShakes = 0;
    let temp = 0;

    while (true) {
        numOfShakes = parseInt((n * (n - 1)) / 2, 10);

        if (numOfShakes > n) {
            break;
        }

        temp = numOfShakes;
        numOfPeople += 1;
    }
    return [n - temp, numOfPeople];
}
