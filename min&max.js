function solution(str) {
  let answer = "";
  const num_array = str.split(" ");
  const min = Math.min(...num_array);
  const max = Math.max(...num_array);
  answer = `${min} ${max}`;
  return answer;
}
