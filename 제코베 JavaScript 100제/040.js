// 놀이동산에 가자
// 한번에 타는 인원수에는 제한이 없지만 제한 무게를 넘으면 다음 기구를 타야 한다.
// 원범이와 친구들이 총 몇 명 탈 수 있는지 알 수 있는 프로그램을 작성해 주세요.
// 첫 번째 입력: 제한 무게, 두 번째 입력: 친구들의 수 n

const maxWeight = prompt("무게 제한");
const n = prompt("인원 수");
let arr = prompt("몸무게").split(" ");
let totalWeight = 0;
let count = 0;

for (let i = 0; i < n; i++) {
  totalWeight += parseInt(arr[i]);
  if (totalWeight <= maxWeight) {
    count++;
  }
}

console.log(count);
