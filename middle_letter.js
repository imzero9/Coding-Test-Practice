function solution(s) {
  if (s.length % 2 == 0) {
    let start = s.length / 2 - 1;
    let end = s.length / 2 + 1;
    let answer = s.substring(start, end);
    return answer;
  } else {
    let start = s.length / 2 - 0.5;
    let answer = s.substr(start, 1);
    return answer;
  }
}
