// 버블정렬 구현하기
// 버블정렬: 두 인접한 원소를 검사하여 정렬하는 방법

function bubble(arr) {
  // 원본 arr을 건드리지 않고 복사본을 만들기 위함 (slice 함수는 새 배열을 반환)
  let result = arr.slice();

  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - i; j++) {
      if (result[j] > result[j + 1]) {
        let value = result[j];
        result[j] = result[j + 1];
        result[j + 1] = value;
      }
    }
  }
  return result;
}

const items = prompt("입력해주세요")
  .split(" ")
  .map((n) => {
    return parseInt(n, 10);
  });

console.log(bubble(items));
