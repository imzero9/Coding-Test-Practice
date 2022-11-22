// 이상한 엘리베이터

// 정량 N에 정확히 맞춰야 움직이는 엘리베이터에서
// 7kg, 3kg 두 가지 화물을 적게 옮길 수 있는 횟수를 출력하고 정량이 N이 되지 않는 경우에 -1을 출력한다

let n = 24;
let result = 0;

while (true) {
    if (n % 7 == 0) {
        result += parseInt(n / 7, 10);
        console.log(result);
        break;
    }
    n -= 3;
    result += 1;
    if (n < 0) {
        console.log(-1);
        break;
    }
}
