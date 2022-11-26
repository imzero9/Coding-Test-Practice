// 콤마 찍기

// 입력 받은 숫자에 천단위로 콤마 찍기

function comma(s) {
    if (s.length <= 3) {
        return s;
    } else {
        return comma(s.slice(0, -3)) + "," + s.slice(-3);
    }
}
