// 연속되는 수

// 스탬프에 적힌 숫자가 공백으로 구분되어 주어지면 이 숫자가 연속수인지 아닌지 'yes'와 'no'로 판별하는 프로그램

const isContinuous = (numString) => {
    const nums = numString.split(" ").sort();

    for (let i = 0; i < nums.length - 1; i++) {
        if (+nums[i] !== +nums[i + 1] - 1) return "NO";
    }
    return "YES";
};

isContinuous("1 2 3 4 5");
isContinuous("1 3 8 4 2 5");
