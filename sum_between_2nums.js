function solution(a, b) {
  let answer = 0;
  if (a === b) {
    answer = a || b;
  } else {
    answer = a + b;
    for (let i = 1; i < Math.abs(a - b); i++) {
      if (a < b) answer += a + i;
      else answer += b + i;
    }
  }
  return answer;
}
