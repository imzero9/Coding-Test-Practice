// 2020년
// a, b를 입력받아 2020년 a월 b일이 무슨 요일인지 리턴하는 함수를 완성하세요.
// (2020년 1월 1일은 수요일)

// 제한
// 2020년은 윤년입니다 (1년이 366일)

const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const month = "12";
const date = "25";

function solution(a, b) {
  const theDay = new Date(`2020-${a}-${b}`);
  console.log(day[theDay.getDay()]);
}

solution(month, date);

// getDay(), getMonth() => 0부터 시작
