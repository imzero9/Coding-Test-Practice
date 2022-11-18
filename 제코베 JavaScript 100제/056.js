// 객체의 함수 응용

// 다음의 객체가 주어졌을 때 한국의 면적과 가장 비슷한 국가와 그 차이를 출력하세요.

const nationWidth = {
    korea: 220877,
    Russia: 17098242,
    China: 9596961,
    France: 543965,
    Japan: 377915,
    England: 242900,
};

const koreaWidth = nationWidth.korea;
delete nationWidth.korea;

const values = Object.values(nationWidth);

let resultGap = Math.max(...values);
let resultNation;

const similarNation = () => {
    for (let nation in nationWidth) {
        const comparedWidth = nationWidth[nation];
        const gap = Math.abs(koreaWidth - comparedWidth);
        if (gap < resultGap) {
            resultGap = gap;
            resultNation = nation;
        }
    }

    return `${resultNation} ${resultGap}`;
};
