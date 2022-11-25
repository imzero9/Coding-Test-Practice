// 변형된 리스트

// a=[1,2,3,4] b=[a,b,c,d]일 때 [[1,a], [b,2], [3,c], [d,4]] 이런식으로 출력하기

const a = [1, 2, 3, 4];
const b = ["a", "b", "c", "d"];

const c = a.map((e, i) => {
    if (i % 2 == 0) {
        return [e, b[i]];
    } else {
        return [b[i], e];
    }
});
